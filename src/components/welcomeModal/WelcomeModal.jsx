import React, { useEffect } from 'react'
import './WelcomeModal.css'
import ClearIcon from '@mui/icons-material/Clear';

export const WelcomeModal = ({ setshowWelcomeMessage,showWelcomeMessage }) => {
  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return() => {
      document.removeEventListener('keydown', keyPress)
}
},[showWelcomeMessage])
const keyPress = (e) => {
  if(e.keyCode==27){
    setshowWelcomeMessage(false)
  }
}
  return (
    <div className='welcome-modal'>
            <div className="welcome-modal-container">
                <div className="model-close-div">
                    <ClearIcon className="close-icon" onClick={() => {setshowWelcomeMessage(false)}}/>
                </div>
                    <h1 className="welcome-head">Welcome to this Shop Managing App</h1>
                    <p className="welcome-text-detail">Here you can add shop lists as many as you want, and filter it out with various filter options.</p>
                    <button className='got-it-bt' onClick={() => {setshowWelcomeMessage(false)}}>Got it</button>
            </div>
    </div>
  )
}
