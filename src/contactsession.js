import './style.css';
import './stule_conect.css';
import { Link } from 'react-router-dom';
function ContactSection() {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" type="text/css" href="css/stule_conect.css" />
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
  <div className="container">
    <main className="row">
      {/*  *******   Left Section (Column) Starts   *******  */}
      <section className="col left">
        {/*  *******   Title Starts   *******  */}
        <div className="contactTitle">
          <h2>Связь с нами</h2>
          <p>Ответим в течение 15 минут!</p>
        </div>
        {/*  *******   Title Ends   *******  */}
        {/*  *******   Contact Info Starts   *******  */}
        <div className="contactInfo">
          <div className="iconsclass">
            <div className="icon">
              <i className="fas fa-phone-alt" />
            </div>
            <div className="details">
              <span>Горячая линия</span>
              <span>+7-960-926-08-07</span>
            </div>
          </div>
          <div className="iconsclass">
            <div className="icon">
              <i className="fas fa-envelope" />
            </div>
            <div className="details">
              <span>Email</span>
              <span>mkpyatelin@gmail.com</span>
            </div>
          </div>
          <div className="iconsclass">
            <div className="icon">
              <i className="fas fa-map-marker-alt" />
            </div>
            <div className="details">
              <span>Местоположение</span>
              <span>Санкт-Петербург, ул. Турку, д.8к5</span>
            </div>
          </div>
        </div>
        {/*  *******   Contact Info Ends   *******  */}
        {/*  *******   Social Media Starts   *******  */}
        <div className="socialMedia">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        {/*  *******   Social Media Ends   *******  */}
      </section>
      {/*  *******   Left Section (Column) Ends   *******  */}
      {/*  *******   Right Section (Column) Starts   *******  */}
      <section className="col right">
        {/*  *******   Form Starts   *******  */}
        <form className="messageForm">
          <div className="inputsfild halfWidth">
            <input type="text" name="" required="required" />
            <label>Введите свое имя</label>
          </div>
          <div className="inputsfild halfWidth">
            <input type="email" name="" required="required" />
            <label>Введите имя почтового ящика</label>
          </div>
          <div className="inputsfild fullWidth">
            <input type="text" name="" required="required" />
            <label>Ваше сообщение </label>
          </div>
          <div className="inputsfild fullWidth">
            <textarea required="required" defaultValue={""} />
            <label>Расскажите, как работает сайт</label>
          </div>
          <div className="inputsfild fullWidth">
            <button>Отправить</button>
          </div>
        </form>
        {/*  *******   Form Ends   *******  */}
      </section>
      {/*  *******   Right Section (Column) Ends   *******  */}
    </main>
  </div>
</>
 );
}

export default ContactSection;