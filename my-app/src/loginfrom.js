import './style.css';
import "./loginform.css"
import { Link } from 'react-router-dom';
function Loginform () {
    return(<>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>For u</title>
        <link rel="stylesheet" href="css/loginform.css" />
        <link rel="stylesheet" href="css/style.css" />
        {/* icons */}
        <link
          rel="stylesheet"
          href="http://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        />
        {/* font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alkatra:wght@400;500;600;700&family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
              <Link to={`/cart`}><i className="far fa-shopping-bag" /></Link>
              </li>
            </ul>
          </div>
        </section>
        <div className="big_container">
          <img className="connect_img" src="images/Mobile login-pana.png" />
          <div className="zzfox">
            <input type="checkbox" id="check" />
            <div className="signup">
              <form action="index.html">
                <label htmlFor="check">Регистрация</label>
                <input type="text" name="txt" required="" placeholder="Введите имя" />
                <input
                  type="password"
                  name="pass"
                  required=""
                  placeholder="Введите пароль"
                />
                <input
                  type="email"
                  name="mail"
                  required=""
                  placeholder="Введите почту"
                />
                <button type="submit">Регистрация</button>
              </form>
            </div>
            {/*login*/}
            <div className="loging">
              <form action="index.html">
                <label htmlFor="check">Войти</label>
                <input
                  type="email"
                  name="mail2"
                  required=""
                  placeholder="Введите почту"
                />
                <input
                  type="password"
                  name="pass2"
                  required=""
                  placeholder="Введите пароль"
                />
                <button type="submit" name="btn">
                  Войти
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
      

    )
}
export default Loginform