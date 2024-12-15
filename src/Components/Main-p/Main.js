import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="content">
      <h1 className="m-text">Сделай свою <br/>жизнь слаще</h1>
      <div className="text">
      <p className="s-text">
        Привет меня зовут Дарья! Я кондитер с более чем 5-летним опытом работы Я
        создаю десерты, которые радуют вкусом и дарят незабываемые моменты.{" "}
      </p>
      <p className="s-text">
        Каждый мой десерт — это сочетание качества, свежих ингредиентов и любви
        к своему делу. Оформите заказ и почувствуйте это сами!
      </p>
      </div>
      <button className="btn-main" onClick={() => {window.location.hash = "";window.location.hash = "#Price";}}>Перейти в каталог</button>
      </div>
    </div>
  );
}

export default Main;
