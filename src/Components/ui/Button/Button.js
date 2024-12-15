import React from "react";
import "./Button.css";

export default function Button(props) {
  const {
    children,
    onClick = () => {},
  } = props;

  return <button className="button-66" onClick={onClick}>{children}Заказать</button>;
}