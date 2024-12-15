import React from "react";
import "./BlockFeedback.css";

export default function BlockFeedback({ text, name, color }) {
  return (
    <div className="blockFeedback" style={{ backgroundColor: color }}>
            <p className="left-cov">“</p>
      <div className="main-block">
        <h4 className="name-block">{name}</h4>
        <p className="text-block">{text}</p>
      </div>
      <p className="right-cov">”</p>
    </div>
  );
}
