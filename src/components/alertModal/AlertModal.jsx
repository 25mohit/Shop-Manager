import React, { useEffect } from 'react'
import './AlertModal.css'

export const AlertModal = ({ message, setShowAlert }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlert(false)
    },3000)
  
    return () => {
      clearInterval(interval)
    }
  }, [])
  

  return (
    <div className='alert-modal-div'>
            <div className="alert-container-div">
                <div className="side-bar"></div>
                        <p className="alert-message">{ message } </p>
            </div>
    </div>
  )
}
