import datamain from "./dataproducts.json"
import { Footer } from './components/footer/footer';
import './style.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
function Shop2() {
  const handleClick = () => {
    alert('Вы подписаны на рассылку');
  }  
  const [stockData, setStockData] = useState([]);

  const handleClickObject = () => {
    setStockData(datamain);
  };
  return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="css/style.css" />
  {/* icons */}
  <link
    rel="stylesheet"
    href="http://pro.fontawesome.com/releases/v5.10.0/css/all.css"
  />
  {/* fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Alkatra:wght@400;500;600;700&family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&family=Quicksand:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <title>For u</title>
  <section id="header">
    <a href="#" className="logo">
      <img src="images/forulogo.png" />
    </a>
    <div className="list">
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
    <div id="nav">
      <ul>
        <li>
        <Link to={`/`}>Главная</Link>
        </li>
        <li>
        <Link to={`/shop`}>Каталог</Link>
        </li>
        <li>
        <Link to={`/about`}>О нас</Link>
        </li>
        <li>
        <Link to={`/contactsection`}>Контакты</Link>
        </li>
        <li>
        <Link to={`/loginform`}>Войти</Link>
        </li>
        <li>
        <Link to={`/cart`}><svg xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 24 24" ><path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="16.5" cy="19.5" r="1.5"></circle></svg></Link>
        </li>
      </ul>
    </div>
  </section>
  <section id="caption">
    <h2>#Домашний стиль</h2>
    <p>Сэкономьте на купонах &amp; получите скидку до 70%!</p>
  </section>
  <section id="product" className="section-p1">
    <div className="container">
    {datamain.map((result) => (
      <div className="pro">
        <img src={result.img} />
        <div className="description">
          <span>{result.brand}</span>
          <h5>{result.title}</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>{result.price}</h4>
        </div>
        <div className='cartbutton'><button onClick={handleClickObject} className='zzz'><svg xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 24 24" ><path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="16.5" cy="19.5" r="1.5"></circle></svg></button></div>
      </div>
                ))}
      
      
    </div>
  </section>
  <section id="page_number" className="section-p1">
  <Link to={`/shop`}>1</Link>
    <a className="active" href="shop2.html">
      2
    </a>
  </section>
  <section id="newsletter">
        <div className="text">
          <h4>Подпишись на рассылку</h4>
          <p>
            Получай сообщения о последних поступлениях и{" "}
            <span>Особых предложениях.</span>
          </p>
        </div>
        <div className='zov'><input placeholder="Введите ваш e-mail" class="input-zov" name="email" type="email"/>
   <button onClick={handleClick} class="buttonzov">Подписаться</button> </div>
      </section>
  <Footer/>
</>
 );
}

export default Shop2