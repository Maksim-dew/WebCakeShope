import React from "react";
import "./Before.css";

import Title from "../ui/Title/title";

function Before() {
  return (
    <div className="before" id="Before">
      <Title title="Прежде чем заказать" translate="Before" />
      <div className="befor-content">
        <div className="block-befor-content">
          <p className="p-questions">Какой бенто торт заказать для 2 двоих?</p>
          <p className="p-answers">
            Бенто торт диаметром 10 см и весом 500 гр подойдут для 2-х человек
          </p>
        </div>
        <div className="block-befor-content">
          <p className="p-questions">
            Какой бенто торт заказать для большой компании?
          </p>
          <p className="p-answers">
            Бенто-MAXI диаметром 14 см и весом 1 кг подойдут для 3-5 человек
          </p>
        </div>
        <div className="block-befor-content">
          <p className="p-questions">Как рассчитать вес тортика ?</p>
          <p className="p-answers">
            Бисквитные торты от 1.5 кг и диаметром 18 см подойдут на компанию
            5-8 человек
          </p>
        </div>
        <div className="block-befor-content">
          <p className="p-questions">Какой вес торта заказать для компании?</p>
          <p className="p-answers">Исходя из расчета 150-200 гр на человека</p>
        </div>
      </div>
    </div>
  );
}

export default Before;
