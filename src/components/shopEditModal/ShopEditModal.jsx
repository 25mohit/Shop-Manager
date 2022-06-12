import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './ShopEditModal.css'
import CancelIcon from '@mui/icons-material/Cancel';
import { AlertModal } from '../alertModal/AlertModal';

export const ShopEditModal = ({ setShowEditModal , id, allData}) => {
    const [shopName, setShopName] = useState(allData.sName)
    const [shopCategory, setShopCategory] = useState(allData.sCategory)
    const [shopArea, setShopArea] = useState(allData.sArea)
    const [showAlert, setShowAlert] = useState(false)
    const dispatch = useDispatch()

    const updateShop = (e) => {
        e.preventDefault()
        // if()
        dispatch({
            type:"EDIT_SHOP_DATA",
            payload:{
                id, shopName, shopCategory, shopArea
            }
        })
        setShowEditModal(false)
        setShowAlert(true)
    }
    useEffect(() => {
            document.addEventListener('keydown', keyPressHandler)
            return() => {
                document.removeEventListener("keydown", keyPressHandler)
            }
    },[])
    
    const keyPressHandler = (e) => {
        if(e.keyCode==27){
            setShowEditModal(false)
        }
    }

  return (
    <div className='edit-shop'>
            <div className="edit-shop-container">
                    <form action="" className='shop-edit-form'>
                        <div className="header-div-shop-modal">
                                    <CancelIcon onClick={() => {setShowEditModal(false)}} className='edit-model-bt' />
                        </div>
                    <input type="text" value={shopName.sName} placeholder="Enter new name for your Shop" onChange={e=> setShopName( e.target.value)}/>
                    <select name="" id="" value={shopArea} onChange={ e => setShopArea(e.target.value)}>
                        <option value="" disabled>Area</option>
                        <option value="Thane">Thane</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai Suburban</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Ahmednagar">Ahmednagar</option>
                        <option value="Solapur">Solapur</option>
                    </select>
                    <select name="" id="" value={shopCategory} onChange={ e => setShopCategory(e.target.value)}>
                        <option value="">Category</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Butcher">Butcher</option>
                        <option value="Baker">Baker</option>
                        <option value="Chemist">Chemist</option>
                        <option value="Stationery">Stationery shop</option>
                        </select>
                    <button onClick={ updateShop }>Edit Shop</button>
                </form>
            </div>
            
            { showAlert && <AlertModal message = { "New Shop details successfully updated !"} setShowAlert={setShowAlert} /> }
    </div>
  )
}
