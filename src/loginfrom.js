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
              <Link to={`/cart`}><svg xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 24 24" ><path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="16.5" cy="19.5" r="1.5"></circle></svg></Link>
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