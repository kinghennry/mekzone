import React from 'react'
 import LocationOnIcon from '@material-ui/icons/LocationOn'; 
 import CallIcon from '@material-ui/icons/Call'; 
import DraftsIcon from '@material-ui/icons/Drafts';
import "./pic.css"
export default function Pic() {
    return (
        <>
            <div className="picture">
                <LocationOnIcon className="address__icon"/>
                <div className="pic__text">
                    <h4>OUR LOCATION</h4>
                    <p>Alexima,NT 456678</p>
                </div>
            </div>
            <div className="picture">
                <DraftsIcon className="address__icon"/>
                <div className="pic__text">
                    <h4>SEND US MAIL</h4>
                    <p>Info@yourdomain.com</p>
                </div>
             </div>
            <div className="picture">                
                <CallIcon className="address__icon"/>
                <div className="pic__text">
                    <h4>CALL US</h4>
                    <p>+456 456 4443</p>
                </div>
            </div>
        </>
    )
}
