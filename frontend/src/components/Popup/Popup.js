import React from 'react'
import './Popup.css'
import { ButtonClose } from '../styled/Button';
export default function Popup(props) {
    return (props.trigger)  ? (    
        <div >
            <div className="popup">
                <div className="popup-inner">
                    <ButtonClose data-testid="buttonPopup" className="close-btn" onClick={()=> props.setTrigger(false)}>X</ButtonClose>
                    {props.children}
                    
                </div>
            </div>
        </div>
    ) : ""; 
}



