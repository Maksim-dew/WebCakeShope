import React, { useState, useRef, useEffect } from 'react';
import "./Order.css";

import emailjs from '@emailjs/browser';

import Title from "../ui/Title/title";
import Button from "../ui/Button/Button";

function Order({data}) {
  console.log('Order data', data);

  // Изначально поле "Заказ" будет иметь данные из props (если они есть)
  const initialOrderValue = data ? [data.name, " Ø" + data.size, " " + data.gramm + "г.", "Цена: " + data.price + " руб."].join("\r\n") : '';
  
  // Состояния для формы и ошибок
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(initialOrderValue); // Состояние для поля "Заказ"
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);  // Статус успешной отправки
  const [isError, setIsError] = useState(false);      // Статус ошибки

  // Обновление состояния для поля "Заказ", если изменились данные в props
  useEffect(() => {
    if (data) {
      setMessage((prevMessage) => {
        // Если поле "Заказ" не пустое, добавляем новые данные к текущим
        return prevMessage ? prevMessage + "\r\n" + [data.name, " Ø" + data.size, " " + data.gramm + "г.", "Цена: " + data.price + " руб."].join("\r\n") : [data.name, " Ø" + data.size, " " + data.gramm + "г.", "Цена: " + data.price + " руб."].join("\r\n");
      });
    }
  }, [data]);

  // Функции для изменения состояний
  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value); // Обработчик для изменения "Заказа"

  const handleKeyPress = (event) => {
    const char = String.fromCharCode(event.which);
    if (!/[0-9]/.test(char)) {
      event.preventDefault();
    }
  };

  const handleNameKeyPress = (event) => {
    const char = String.fromCharCode(event.which);
    if (!/[a-zA-Zа-яА-ЯёЁ]/.test(char)) {
      event.preventDefault();
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !phone || !message) {
      setError('Пожалуйста, заполните все поля.');
      return;
    }

    setError(''); // Очистим ошибку, если все поля заполнены

    emailjs
      .sendForm('service_mc5zbyl', 'template_iy79fc9', form.current, {
        publicKey: 'Sh9n2H9hAJA-6DyLW',
      })
      .then(
        () => {
          setIsSuccess(true);  // Успех
          setTimeout(() => setIsSuccess(false), 3000);  // Скрываем попап через 3 секунды
        },
        (error) => {
          setIsError(true);    // Ошибка
          setTimeout(() => setIsError(false), 3000);  // Скрываем попап через 3 секунды
          console.log('FAILED...', error.text);
        },
      );
  };

  // Функция для проверки, заполнены ли все поля
  const isFormValid = () => {
    return name && phone && message;
  };

  return (
    <div className="order" id="Order">
      <Title title="Заказать" translate="Order" />
      <div className="ab-content">
        <form className="card-form" ref={form} onSubmit={sendEmail}>
          <h5 className="title-order">Закажи прямо сейчас</h5>
          <div className="input-order">
            <input 
              type="text" 
              name="user_name" 
              placeholder="Имя" 
              value={name} 
              onChange={handleNameChange} 
              onKeyPress={handleNameKeyPress}
            />
            <input 
              name="user_phone" 
              placeholder="Телефон" 
              value={phone} 
              onChange={handlePhoneChange} 
              onKeyPress={handleKeyPress}
            />
            {/* <input 
              name="message" 
              placeholder="Заказ" 
              value={message} 
              onChange={handleMessageChange}  // Обработчик изменения для поля "Заказ"
            /> */}
            <textarea
              name="message"
              placeholder="Заказ"
              value={message}
              onChange={handleMessageChange}
              rows="5"
              style={{resize: 'none'}}  // Автоматическое увеличение высоты
            />
          </div>
          <div className="btn-order">
            <Button disabled={!isFormValid()} type="submit" value="Send" />
          </div>
          {error && <p className="error-message">{error}</p>}
          {error && <p className="error-message">{error}</p>}
        {/* Показываем ошибку только если поле message пустое */}
        {!message && !data && <p className="error-message">Пожалуйста, выберите продукт для заказа.</p>}
        </form>

        {isSuccess && (
          <div className="popup success-popup">
            <p>Ваш заказ успешно отправлен!</p>
          </div>
        )}

        {isError && (
          <div className="popup error-popup">
            <p>Произошла ошибка. Попробуйте снова.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
