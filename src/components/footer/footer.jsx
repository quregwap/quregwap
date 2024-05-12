import "./footer.css"
import React from 'react'

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
        <a href="#home">Главная</a>
      </li>
      <li>
        <a href="#categories">Каталог</a>
      </li>
      <li>
        <a href="#courses">Контакты</a>
      </li>
    </div>
    <div className="contact-content">
    <li>
        <a href="#about">О нас</a>
      </li>
      <li>
        <a href="#contact">Войти</a>
      </li>
      <li>
        <a href="#">Корзина</a>
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
