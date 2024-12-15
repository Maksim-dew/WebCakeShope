import React from "react";
import "./title.css";

export default function Title({ title, translate }) {
  return (
  <div className="c-title">
    <h2 className="t-title">{title}</h2>
    <h3 className="tr-title">{translate}</h3>
  </div>
  );
}
