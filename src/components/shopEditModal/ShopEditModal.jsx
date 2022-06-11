import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './ShopEditModal.css'

export const ShopEditModal = ({ setShowEditModal , id, allData}) => {
    const [shopName, setShopName] = useState(allData)
    const [shopCategory, setShopCategory] = useState(allData.sCategory)
    const [shopArea, setShopArea] = useState(allData.sArea)

    const dispatch = useDispatch()

    const updateShop = (e) => {
        e.preventDefault()
        dispatch({
            type:"EDIT_SHOP_DATA",
            payload:{
                shopName, shopCategory, shopArea
            }
        })
        alert('Success')
    }
    console.log(id);
    
  return (
    <div className='edit-shop'>
            <div className="edit-shop-container">
                    <form action="" className='shop-edit-form'>
                    <button onClick={() => {setShowEditModal(false)}}>X</button>
                    <input type="text" value={shopName.sName} onChange={e=> setShopName( e.target.value)}/>
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
                    <button onClick={ updateShop }>EDIT</button>
                </form>
            </div>
    </div>
  )
}
