import React, { useState } from 'react'
import './ShopCard.css'
import one from '../../assets/cardImages/1.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { MessageModal } from '../messageModal/MessageModal'

export const ShopCard = ({ data }) => {
    const [deleteModal, setDeleteModal] = useState(false)


  return (
    <div className='shop-card-div'>
        <div className="card-heading">
                <p className="shop-name">{ data.sName }</p>
        </div>
        <img src={ one } alt="" className='card-image'/>
        <div className="card-info">
            <p className="shop-category">Category:&nbsp;&nbsp;<span>{ data.sCategory }</span></p>
            <p className="shop-area"><LocationOnIcon className='icon'/>{ data.sArea }</p>
            <p className="shop-open-date"><AccessTimeIcon className='icon' />{ data.sOpenDate }</p>
            <p className="shop-close-date"><WatchLaterIcon  className='icon'/>{ data.sCloseDate }</p>
            <button className="delete-bt" onClick={() => {setDeleteModal(true)}}>Delete</button>
        </div>
        
        {deleteModal && <MessageModal id={data.id} setDeleteModal ={setDeleteModal}/>}
    </div>
  )
}
