import React, { useState } from "react";
import "./Price.css";

import Title from "../ui/Title/title";
import ProductCard from "../ui/ProductCard/ProductCard";

import oreo from "../Photo/Oreo.jpg"
import snikers from "../Photo/Snikers.jpg"
import berry from "../Photo/berry.jpg"
import cherryChocolate from "../Photo/CherryChocolate.jpg"

import milkSlice from "../Photo/milkSlice.jpg"
import сherryСhocolate from "../Photo/сherryСhocolate.jpg"
import SnickersTort from "../Photo/SnickersTort.jpeg"
import RedVelvet from "../Photo/RedVelvet.jpeg"
import CreamyСaramel from "../Photo/CreamyСaramel.jpg"
import CreamyСaramel2 from "../Photo/CreamyСaramel2.jpg"

import CCitrus from "../Photo/CCitrus.jpeg"
import CCherryChocolate from "../Photo/CChocolateChocolate.jpeg"
import CVanillaBerry from "../Photo/CVanillaBerry.jpeg"

import OpenHoneyCake from "../Photo/OpenHoneyCake.jpeg"

import OutdoorHoneyCakeHerringbone from "../Photo/OutdoorHoneyCakeHerringbone.jpeg"
import MadeleineCookies from "../Photo/MadeleineCookies.jpeg"
import DubaiSweets from "../Photo/DubaiSweets.jpeg"
import CaviarSandwich from "../Photo/CaviarSandwich.jpeg"

import Moti from "../Photo/Moti.jpeg"

import DubaiChocolate from "../Photo/DubaiChocolate.JPG"
import SmDubaiChocolate from "../Photo/SmDubaiChocolate.JPG"


import banan from "../Photo/banan.jpg"
import { color } from "storybook/internal/theming";

function Price ({setProduct}) {

  const products = [
    {
      id: 1,
      name: 'Орео',
      description: 'Нежные шоколадные коржи воздушный крем чиз с добавлением печенья ганаш на основе молочного итальянского шоколада',
      price: 1500,
      image: oreo,
      size: 10,
      gramm: "500 г.",
      category: 'bento',
    },
    {
      id: 2,
      name: 'Сникерс',
      description: 'Нежные шоколадные коржи классический крем чиз взбитая соленая карамель соленый арахис',
      price: 1500,
      image: snikers,
      size: 10,
      gramm: "500 г.",
      category: 'bento',
    },
    {
      id: 3,
      name: 'Ягодный',
      description: 'Ванильный бисквит с добавлением натуральной ванили классический крем чиз ягодная прослойка из пюре вишня и клубники',
      price: 1500,
      image: berry,
      size: 10,
      gramm: "500 г.",
      category: 'bento',
    },
    {
      id: 4,
      name: 'Сливочная карамель',
      description: 'Ванильный бисквит с добавлением натуральной ванили классический крем чиз сливочная взбитая карамель',
      price: 1500,
      image: CreamyСaramel,
      size: 10,
      gramm: "500 г.",
      category: 'bento',
    },
    {
      id: 5,
      name: 'Вишня-шоколад',
      description: 'Нежные шоколадные коржи воздушный шоколадный крем с добавлением итальянского молочного шоколада кусочки цельной вишни',
      price: 1500,
      image: cherryChocolate,
      size: 10,
      gramm: "500 г.",
      category: 'bento',
    },
///////////////////////////////////////
    {
      id: 7,
      name: 'Сливочная карамель',
      description: 'Ванильный бисквит с добавлением натуральной ванили, классический крем чиз, взбитая  сливочная карамель, ванильный чизкейк',
      price: 2000,
      image: CreamyСaramel2,
      size: 18,
      gramm: "1500 г.",
      category: 'cakes',
    },
    {
      id: 8,
      name: 'Молочный ломтик',
      description: 'Шоколадный бисквит, шоколадная прослойка из итальянского молочного шоколада, ганаш на основе белого шоколада',
      price: 2200,
      image: milkSlice,
      size: 18,
      gramm: "1500  г.",
      category: 'cakes',
    },
    {
      id: 9,
      name: 'Вишня-шоколад',
      description: 'Шоколадный бисквит, воздушный крем чиз с добавлением молочного шоколада, сочная вишневая прослойка с цельной вишней',
      price: 2000,
      image: сherryСhocolate,
      size: 18,
      gramm: "1500 г.",
      category: 'cakes',
    },
    {
      id: 10,
      name: 'Сникерс',
      description: 'Шоколадный бисквит, шоколадный крем с добавлением молочного шоколада, взбитая соленая карамель, соленый арахис, шоколадный ганаш',
      price: 2000,
      image: SnickersTort,
      size: 18,
      gramm: "1500 г.",
      category: 'cakes',
    },
    {
      id: 11,
      name: 'Красный бархат с вишней',
      description: 'Сочный бисквит  с добавлением натурального красителя и какао, ягодный крем чиз, прослойка желе из ягод, ягодное конфи',
      price: 2000,
      image: RedVelvet,
      size: 18,
      gramm: "1500 г.",
      category: 'cakes',
    },
    {
      id: 12,
      name: 'Красный бархат с клубникой',
      description: 'Сочный бисквит  с добавлением натурального красителя и какао, ягодный крем чиз, прослойка желе из ягод, ягодное конфи',
      price: 2000,
      image: RedVelvet,
      size: 18,
      gramm: "1500 г.",
      category: 'cakes',
    },
///////////////////////////////////////
    {
      id: 13,
      name: 'Сникерс',
      description: 'Нежные шоколадные коржи классический крем чиз Взбитая соленая карамель соленый арахис',
      price: 2000,
      image: snikers,
      size: 14,
      gramm: "1000 г.",
      category: 'bento-maxi',
    },
    {
      id: 14,
      name: 'Сливочная карамель',
      description: 'Ванильный бисквит с добавлением натуральной ванили классический крем чиз сливочная взбитая карамель',
      price: 2000,
      image: CreamyСaramel,
      size: 14,
      gramm: "1000 г.",
      category: 'bento-maxi',
    },
    {
      id: 14,
      name: 'Ягодный',
      description: 'Ванильный бисквит с добавлением натуральной ванили классический крем чизЯгодная прослойка из пюре вишня и клубники',
      price: 2000,
      image: berry,
      size: 14,
      gramm: "1000 г.",
      category: 'bento-maxi',
    },
    {
      id: 16,
      name: 'Карамельный банан',
      description: 'Шоколадный бисквит, Классический крем чиз, карамелизированный  банан со сливочной карамелью',
      price: 2000,
      image: banan,
      size: 14,
      gramm: "1000 г.",
      category: 'bento-maxi',
    },
    {
      id: 17,
      name: 'Орео',
      description: 'Нежные шоколадные коржи воздушный крем чиз с добавлением печенья ганаш на основе молочного итальянского шоколада',
      price: 2000,
      image: oreo,
      size: 14,
      gramm: "1000 г.",
      category: 'bento-maxi',
    },
    //////////////////////////////////////////////
    {
      id: 18,
      name: 'Капкейки',
      description: 'Основа цитрус,начинка сливочная карамель',
      price: 200,
      image: CCitrus,
      size: 5,
      gramm: "6 шт.",
      category: 'cupcakes',
    },
    {
      id: 19,
      name: 'Капкейки',
      description: 'Основа ваниль-ягодная начинка(вишня и клубника)',
      price: 200,
      image: CVanillaBerry,
      size: 5,
      gramm: "6 шт.",
      category: 'cupcakes',
    },
    {
      id: 20,
      name: 'Капкейки',
      description: 'Основа шоколадная -шоколадная начинка с добавлением молочного шоколада',
      price: 200,
      image: CCherryChocolate,
      size: 5,
      gramm: "6 шт.",
      category: 'cupcakes',
    },
    //////////////////////////////////
    {
      id: 21,
      name: 'Открытый медовик ',
      description: 'Медовые мягкие коржи, нежный крем чиз, ягодная прослойка/карамельная ',
      price: 2000,
      image: OpenHoneyCake,
      size: 10,
      gramm: "1 кг.",
      category: 'medovik',
    },
    //////////////////////////////////
    {
      id: 22,
      name: 'Открытый медовик Елочка',
      description: 'Медовые коржи, нежнейший крем, ягодная прослойка. Возможные начинки для данного тортика: ягодная/карамель ',
      price: 2500,
      image: OutdoorHoneyCakeHerringbone,
      size: 10,
      gramm: " 1 кг.",
      category: 'hit',
    },
    {
      id: 23,
      name: 'Печенье Мадлен',
      description: '🐚 Французское бисквитное печенье. Шоколадные со сливочной карамелью внутри и корпус из молочного шоколада✨',
      price: 900,
      image: MadeleineCookies,
      size: 4,
      gramm: "9 шт.",
      category: 'hit',
    },
    {
      id: 24,
      name: 'Дубайские конфеты',
      description: 'Дубайские конфеты в виде елочных игрушек🎄молочный шоколад и фисташковая начинка внутри',
      price: 800,
      image: DubaiSweets,
      size: 4,
      gramm: "6 шт.",
      category: 'hit',
    },
    {
      id: 25,
      name: 'Мини тортик Бутерброд с икрой ',
      description: 'Икра-пюре манго и маракуйи. Начинки: сливочная карамель, ягодная, ваниль-клубника/вишня ',
      price: 1300,
      image: CaviarSandwich,
      size: 8,
      gramm: "400 г.",
      category: 'hit',
    },
    //////////////////////////////////
    {
      id: 26,
      name: 'Моти Осень-Зима',
      description: 'Начинки: Сникерс, Апельсиновый мокко, Раф халва лесной орех, Облепиха мандарин, Имбирный пряник, Баунти, Рафаэло, Макфлури с малиной.',
      price: 200,
      image: Moti,
      size: 5,
      gramm: "4 шт.",
      category: 'moti',
    },
    //////////////////////////////////////
    {
      id: 27,
      name: 'Дубайский шоколад',
      description: 'Итальянский молочный шоколад, фисташковая паста, катаифи - тесто ручной работы.',
      price: 1700,
      image: DubaiChocolate,
      size: '18',
      gramm: "~360/380 г.",
      category: 'DubaiChocolate',
    },
    {
      id: 28,
      name: 'Дубайский шоколад',
      description: 'Итальянский молочный шоколад, фисташковая паста, катаифи - тесто ручной работы.',
      price: 700,
      image: SmDubaiChocolate,
      size: '11.5',
      gramm: "100 г.",
      category: 'DubaiChocolate',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('cakes');

  const ProductList = () => {
    const filteredProducts = products.filter(
      (product) => product.category === selectedCategory
    );

    return (
      <div>
        <nav className="menu">
          {/* <a
            className={`aa ${selectedCategory === 'hit' ? 'active' : ''}`}
            href="#hit"
            onClick={() => setSelectedCategory('hit')}
            style={{ color: 'red' }}
          >
            Новый год
          </a> */}
          <a
            className={`aa ${selectedCategory === 'cakes' ? 'active' : ''}`}
            href="#cakes"
            onClick={() => setSelectedCategory('cakes')}
          >
            Торты
          </a>
          <a
            className={`aa ${selectedCategory === 'bento' ? 'active' : ''}`}
            href="#bento"
            onClick={() => setSelectedCategory('bento')}
          >
            Бенто
          </a>
          <a
            className={`aa ${selectedCategory === 'bento-maxi' ? 'active' : ''}`}
            href="#bento-maxi"
            onClick={() => setSelectedCategory('bento-maxi')}
          >
            Бенто MAXI
          </a>
          <a
            className={`aa ${selectedCategory === 'cupcakes' ? 'active' : ''}`}
            href="#cupcakes"
            onClick={() => setSelectedCategory('cupcakes')}
          >
            Капкейки
          </a>
          <a
            className={`aa ${selectedCategory === 'medovik' ? 'active' : ''}`}
            href="#medovik"
            onClick={() => setSelectedCategory('medovik')}
          >
            Медовик
          </a>
          <a
            className={`aa ${selectedCategory === 'moti' ? 'active' : ''}`}
            href="#moti"
            onClick={() => setSelectedCategory('moti')}
          >
            Моти
          </a>
          <a
            className={`aa ${selectedCategory === 'DubaiChocolate' ? 'active' : ''}`}
            href="#DubaiChocolate"
            onClick={() => setSelectedCategory('DubaiChocolate')}
          >
            Дубайский шоколад
          </a>
        </nav>

        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              size={product.size}
              gramm={product.gramm}
              setProduct={setProduct}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="price" id="Price">
      <Title title="Прайс" translate="Price" />
      <div className="price-content">
        <ProductList />
        {(selectedCategory === 'medovik' || selectedCategory === 'bento-maxi' || selectedCategory === 'bento' || selectedCategory === 'cakes') && (
          <section className="extras">
            <h2 className="ex-name">Дополнительно</h2>
            <ul>
              <li className="li-name">Печать на съедобной бумаге - <strong>от 300 р.</strong></li>
              <li className="li-name">Роспись и мазки - <strong>от 100 р.</strong></li>
              <li className="li-name">Кремовый рисунок - <strong>от 200 р.</strong></li>
              <li className="li-name">Кремовая надпись - <strong>бесплатно</strong></li>
            </ul>
          </section>
        )}
         {selectedCategory === 'hit' && (
          <section className="sets">
            <h2 className="ex-name">Наборы</h2>
            <ul>
              <li className="li-name">Мадлен 6 шт. + 6 шт. конфет <strong>1400 р.</strong></li>
              <li className="li-name">Мадлен 9 шт. + 6 шт. конфет <strong>1700 р.</strong></li>
              <li className="li-name">Мадлен 12 шт. + 6 шт. конфет <strong>2000 р.</strong></li>
              <li className="li-name">Конфеты 6 шт. <strong>800 р.</strong></li>
              <li className="li-name">Конфеты 8 шт. <strong>1100 р.</strong></li>
              <li className="li-name">Конфеты 9 шт. <strong>1200 р.</strong></li>
              <li className="li-name">Конфеты 12 шт. <strong>1600 р.</strong></li>
              <li className="li-name">Конфеты 16 шт. <strong>2200 р.</strong></li>
            </ul>
          </section>
        )}
        {selectedCategory === 'moti' && (
          <section className="extras">
            <h2 className="ex-name">Дополнительно</h2>
            <ul>
              <li className="li-name">Наличие уточнять</li>
              <li className="li-name">Если нужен конкретный вкус - срок изготовления 1-2 дня</li>
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

export default Price;
