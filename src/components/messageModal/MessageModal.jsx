import React, { useEffect } from 'react'
import './MessageModal.css'
import { useDispatch  } from 'react-redux/';
import CancelIcon from '@mui/icons-material/Cancel';

export const MessageModal = ({setDeleteModal,deleteModal, id}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return() => {
          document.removeEventListener('keydown', keyPress)
  }
    },[deleteModal])
    const keyPress = (e) => {
      if(e.keyCode==27){
          setDeleteModal(false)
      }
    }

    const deleteBt = () => {
        dispatch({
            type:"DELETE_SHOP",
            payload: id
        })
        setDeleteModal(false)
    }
    
  return (
    <div className='message-modal'>
            <div className="message-container">
                    <h2 className="message-heading">Are you sure ?</h2>
                    <div className="bt-container">
                        <button className="model-delete-be" onClick={ deleteBt }>Yes</button>
                        <button className="model-cancel-be" onClick={() =>{setDeleteModal(false)}}>No</button>
                    </div>
                    <CancelIcon className='model-close-bt' onClick={() =>{setDeleteModal(false)}}/>
            </div>
    </div>
  )
}
