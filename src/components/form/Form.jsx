import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AlertModal } from '../alertModal/AlertModal'
import './Form.css'

export const Form = () => {
    const [sName, setSName] = useState('')
    const [sArea, setSArea] = useState('')
    const [sCategory, setSCategory] = useState('')
    const [sOpenDate, setSOpenDate] = useState('')
    const [sCloseDate, setSCloseDate] = useState('')

    const [name, setName] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [emptyField, setEmptyField] = useState(false)

   const dispatch = useDispatch()
       const submitForm = (e) => {
           e.preventDefault();
           if(sName && sArea && sCategory && sOpenDate && sCloseDate){
                   dispatch({
                       type: "REGISTER_SHOP",
                       payload:{
                           id:(new Date).getTime(),
                           sName, sArea, sCategory, sOpenDate, sCloseDate
                        }
                    })
                    setShowAlert(true)
                    setSName('')
                    setSArea('')
                    setSCategory('')
                    setSOpenDate('')
                    setSCloseDate('')
            }else{
                setEmptyField(true)
            }
        }
        return(
        <div className="form-div">
            <h1 className="heading">Regiater Shop</h1>
                    <form className="shop-registration-form">
                            <label htmlFor="shopName">Shop Name</label>
                            <input type="text" className='shop-name-field' onBlur={()=>{setName(true)}} focused={name.toString()} value={ sName } pattern='^[A-Za-z\s]{2,50}' onChange={ e => setSName(e.target.value)} placeholder="Enter shop name" name="shopName"/>
                            <span className="user-name-error"><strong>Please enter only alphabats, and should be more then 2 letters</strong></span>
                            <label htmlFor="areaSelect">Area</label>
                            <select name="areaSelect" id="" value={ sArea } onChange={ e => setSArea(e.target.value)}>
                                    <option value="" disabled>Select</option>
                                    <option value="Thane">Thane</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Mumbai">Mumbai Suburban</option>
                                    <option value="Nashik">Nashik</option>
                                    <option value="Nagpur">Nagpur</option>
                                    <option value="Ahmednagar">Ahmednagar</option>
                                    <option value="Solapur">Solapur</option>
                            </select>
                            <label htmlFor="categorySelect">Category</label>
                            <select name="" id="" value={ sCategory } onChange={ e => setSCategory(e.target.value)}>
                                    <option value="" disabled>Select</option>
                                    <option value="Grocery">Grocery</option>
                                    <option value="Butcher">Butcher</option>
                                    <option value="Baker">Baker</option>
                                    <option value="Chemist">Chemist</option>
                                    <option value="Stationery">Stationery shop</option>
                            </select>
                            <label htmlFor="openDate">Open Date</label>
                            <input type="date" name="openDate" id="" max={sCloseDate } value={ sOpenDate } onChange={ e => setSOpenDate(e.target.value)}/>
                            <label htmlFor="closeDate">Close Date</label>
                            <input type="date" name="closeDate" id=""  min={sOpenDate} value={ sCloseDate } onChange={ e => setSCloseDate(e.target.value)}/>
                            <button className="submit-bt" onClick={ submitForm }>SUBMIT</button>
                    </form>
                    { showAlert && <AlertModal message = { "Shop successfully added"} setShowAlert={setShowAlert} /> }
                    { emptyField && <AlertModal message = { "Please fill all fields"} setShowAlert={setEmptyField} /> }
        </div>
    )
}