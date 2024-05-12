import { Footer } from './components/footer/footer';
import './style.css';
import { Link } from 'react-router-dom';
function About() {
   return(
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
    <section id="caption" className="about-caption">
      <h2>#О нас</h2>
      <p>Наша маленькая история</p>
    </section>
    <section id="about-body" className="section-p1">
      <img src="images/about/About us page-pana.png" />
      <div>
        <h2>Кто мы ?</h2>
        <p>
          Давние друзья, Лиза и Марк, мечтали создать уникальный магазин одежды.
          Обмениваясь идеями, они решили воплотить свою мечту. Лиза - дизайнер,
          Марк - бизнесмен, объединились и начали трудиться над проектом. После
          долгих усилий, выбора поставщиков и разработки концепции, магазин был
          открыт. Стильные наряды, уютная атмосфера, внимательное отношение к
          клиентам делали магазин Лизы и Марка популярным среди местных жителей.
          Их труд, страсть и вера в свою мечту привели к успеху. История двух
          друзей стала примером того, как талант, труд и вера могут привести к
          великому успеху.
        </p>
      </div>
    </section>
    <section id="feature" className="section-p1">
      <div className="feat-box">
        <img src="images/feature/feat1.png" />
        <h6>Бесплатная доставка</h6>
      </div>
      <div className="feat-box">
        <img src="images/feature/feat2.png" />
        <h6>Онлайн заказ</h6>
      </div>
      <div className="feat-box">
        <img src="images/feature/feat3.png" />
        <h6>Кэшбек</h6>
      </div>
      <div className="feat-box">
        <img src="images/feature/feat4.png" />
        <h6>Карта лояльности</h6>
      </div>
      <div className="feat-box">
        <img src="images/feature/feat5.png" />
        <h6>Смешные цены</h6>
      </div>
      <div className="feat-box">
        <img src="images/feature/feat6.png" />
        <h6>Поддержка</h6>
      </div>
    </section>
    <Footer/>
  </>     )
}
export default About