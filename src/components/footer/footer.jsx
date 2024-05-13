import "./footer.css"
import React from 'react'
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <section className="contact" id="contact">
  <div className="main-contact">
    <div className="contact-content">
    <a href="#" className="logo">
          <img src="images/forulogo.png"  />
        </a>
      <li>
        <a href="#">Facebook</a>
      </li>
      <li>
        <a href="#">Instagram</a>
      </li>
      <li>
        <a href="#">Twitter</a>
      </li>
    </div>
    <div className="contact-content">
      <li>
      <Link to={`/`}>Главная</Link>
      </li>
      <li>
      <Link to={`/shop`}>Каталог</Link>
      </li>
      <li>
      <Link to={`/contactsection`}>Контакты</Link>
      </li>
    </div>
    <div className="contact-content">
    <li>
    <Link to={`/about`}>О нас</Link>
      </li>
      <li>
      <Link to={`/loginform`}>Войти</Link>
      </li>
      <li>
      <Link to={`/cart`}>Корзина</Link>
      </li>
    </div>
    <div className="contact-content">
      <li>
        <a href="#">
          Санкт-Петербург, <br /> Турку 8к5
        </a>
      </li>
      <li>
        <a href="#">mkpyatelin@gmail.ru</a>
      </li>
      <li>
        <a href="#">01747895741</a>
      </li>
    </div>
  </div>
</section>
  )
}
