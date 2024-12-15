import React from "react";
import Navigation from "./Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <h1 className="logo">da_cakes_store</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
