import { Footer } from './components/footer/footer';
import './style.css';
import { Link } from 'react-router-dom';
function Shop2() {
  const handleClick = () => {
    alert('Вы подписаны на рассылку');
  }  
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
        <Link to={`/cart`}><i className="far fa-shopping-bag" /></Link>
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
      <div className="pro">
        <img src="images/product/1.jpg" />
        <div className="description">
          <span>Adidas</span>
          <h5>Sport shorts</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>1 500 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/2.jpg" />
        <div className="description">
          <span>Balenciaga</span>
          <h5>Swetty pants</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>1 000 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/3.jpg" />
        <div className="description">
          <span>Adidas</span>
          <h5>Swim shorts</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>2 400 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/4.jpg" />
        <div className="description">
          <span>Adidas</span>
          <h5>Home style shorts</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>700 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/5.jpg" />
        <div className="description">
          <span>Adidas</span>
          <h5>Home style shorts vol.2</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>1 000 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/6.jpg" />
        <div className="description">
          <span>Maison Margiela</span>
          <h5>Cream Jacket</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>24 500 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/7.jpg" />
        <div className="description">
          <span>Maison Margiela</span>
          <h5>Smoke Jacket</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>13 000 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/8.jpg" />
        <div className="description">
          <span>Maison Margiela</span>
          <h5>Grey Official Jacket</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>20 000 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/9.jpg" />
        <div className="description">
          <span>True Religion</span>
          <h5>Office Shirt</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>9 300 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/10.jpg" />
        <div className="description">
          <span>Adidas</span>
          <h5>Cotton T-shirt</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>1 300 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/11.jpg" />
        <div className="description">
          <span>Adidas</span>
          <h5>Cream shirt</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>2 400 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/12.jpg" />
        <div className="description">
          <span>Adidas</span>
          <h5>Checkred Shirt</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>3 449 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/13.jpg" />
        <div className="description">
          <span>Burberry</span>
          <h5>Pogchamp shirt</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>9 499 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/14.jpg" />
        <div className="description">
          <span>Adidas</span>
          <h5>Jeans Cream shirt</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>4 499 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/15.jpg" />
        <div className="description">
          <span>Raf Simons</span>
          <h5>Shit Shirt</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>7 999 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/17.jpg" />
        <div className="description">
          <span>Raf Simons</span>
          <h5>
            Shit Shirt <vol className={2} />
          </h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>6 999 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/s9.jpg" />
        <div className="description">
          <span>Amiri</span>
          <h5>StreetWear Jeans</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>35 000 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/s10.jpg" />
        <div className="description">
          <span>Armani</span>
          <h5>EA7</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>12 000 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/s11.jpg" />
        <div className="description">
          <span>Adidas</span>
          <h5>Cartoon Astronout Sports trousers</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>5 555 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/s12.jpg" />
        <div className="description">
          <span>Adidas</span>
          <h5>Sports trousers</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>3 700 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
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