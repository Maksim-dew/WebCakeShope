import React from 'react';
import './Navigation.css'

function Navigation() {
  return (
    <nav className="menu-nav">
      <ul className="menu-ul">
        <li className="li"><a className="a" href="#About">Почему я</a></li>
        <li className="li"><a className="a" href="#Work">Работы</a></li>
        <li className="li"><a className="a" href="#Price">Прайс</a></li>
        <li className="li"><a className="a" href="#Before">Вопросы</a></li>
        <li className="li"><a className="a" href="#Feedback">Отзывы</a></li>
        <li className="li"><a className="a" href="#Order">Заказать</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;