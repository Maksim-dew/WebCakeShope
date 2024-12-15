import React from "react";
import "./About.css";

import Title from "../ui/Title/title";

import Dasha from "../Photo/Dasha.jpg";

function About() {
  return (
    <div className="about" id="About">
      <Title title="Почему я" translate="About" />
      <div className="a-content">
        <div className="block-text">
          <p className="sa-text s-text">
            <strong>1. Индивидуальный подход.</strong> Каждое изделие -это
            уникальный проект,Я внимательно слушаю Ваши пожелания и предлагаю
            идеи,которые подойдут именно для Вас.
          </p>
          <p className="sa-text s-text">
            <strong>2. Качество ингредиентов.</strong> Все мои десерты выполнены
            из качественных и свежих продуктов.Ваш праздник пройдет не только
            красиво,но и вкусно!
          </p>
          <p className="sa-text s-text">
            <strong>3. Про обучение.</strong> Я постоянно повышаю свой
            профессиональный навык.Прохожу различные курсы,обучения,имею
            множество дипломов,сертификатов.Я постоянно развиваюсь в своей
            сфере,что позволяет мне грамотно и качественно выполнять Ваши
            заказы.
          </p>
        </div>
        <div className="block-photo">
          <img className="dasha-img" src={Dasha} alt="Dasha" />
        </div>
      </div>
    </div>
  );
}

export default About;
