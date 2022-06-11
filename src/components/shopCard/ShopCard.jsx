import React, { useState } from 'react'
import './ShopCard.css'
import one from '../../assets/cardImages/1.jpg'
import two from '../../assets/cardImages/2.jpg'
import three from '../../assets/cardImages/3.jpg'
import four from '../../assets/cardImages/4.jpg'
import five from '../../assets/cardImages/5.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { MessageModal } from '../messageModal/MessageModal'
import { ShopEditModal } from '../shopEditModal/ShopEditModal'

export const ShopCard = ({ data }) => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)

  return (
    <div className='shop-card-div'>
        <div className="card-heading">
                <p className="shop-name">{ data.sName }</p>
        </div>
        <img src={ data.sCategory == "Grocery" && four || data.sCategory == "Butcher" && two || data.sCategory == "Baker" && three || data.sCategory == "Chemist" && one || data.sCategory == "Stationery" && five } alt="" className='card-image'/>
        <div className="card-info">
            <p className="shop-category">Category:&nbsp;&nbsp;<span>{ data.sCategory }</span></p>
            <p className="shop-area"><LocationOnIcon className='icon'/>{ data.sArea }</p>
            <p className="shop-open-date"><AccessTimeIcon className='icon' />{ data.sOpenDate }</p>
            <p className="shop-close-date"><WatchLaterIcon  className='icon'/>{ data.sCloseDate }</p>
            <div className="footer-bt-div">
                <button className="delete-bt" onClick={() => {setDeleteModal(true)}}>Delete</button>
                <p className="edit-text" onClick={() => {setShowEditModal(true)}}>edit</p>
                {data.id}
            </div>
        </div>
        {showEditModal && <ShopEditModal setShowEditModal={ setShowEditModal } id={data.id} allData={ data }/>}
        {deleteModal && <MessageModal id={data.id} setDeleteModal ={setDeleteModal} deleteModal={ deleteModal }/>}
    </div>
  )
}
