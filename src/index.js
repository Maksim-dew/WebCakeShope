import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Header from './Components/Header/Header';
import Main from './Components/Main-p/Main';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Before from './Components/Before/Before';
import Feedback from './Components/Feedback/Feedback';
import Order from './Components/Order/Order';
import Footer from './Components/Footer/Footer';
import Price from './Components/Price/Price';

import Popup from './Components/ui/Popup/Popup';

import img_popup from './Components/Photo/popup.jpg';

const Popups = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setIsPopupOpen(true); // Открываем попап при загрузке страницы
    document.body.style.overflow = 'hidden';
  }, []);

  const handleClose = () => {
    setIsPopupOpen(false); // Закрываем попап
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      {isPopupOpen && <Popup handleClose={handleClose} 
      image={img_popup}
      title="Новости"
      description="При заказе с моего сайта до 29.12.24 скидка на каждый заказ 10%"/>}
    </div>
  );
};

const App = () => {

  const [dataProduct, setDataProduct] = useState(null);

  return (
    <React.StrictMode >
      <Header />
      <Main />
      <About />
      <Work />
      <Price setProduct={setDataProduct} />
      <Before />
      <Feedback />
      <Order data={dataProduct} />
      <Footer />
      {/* <Popups /> */}
    </React.StrictMode >
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
