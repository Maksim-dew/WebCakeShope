import React from "react";
import './Popup.css';

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        
        <img src ={props.image} alt="image" className="box-image"/>
        <div className="text-popup"> 
        <span className="close-icon" onClick={props.handleClose}>x</span>
          <h2 className="h-popup">{props.title}</h2>
          <p className="p-popup">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
 
export default Popup;