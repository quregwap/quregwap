import { Footer } from './components/footer/footer';
import './style.css';
import { Link } from 'react-router-dom';
function Shop() {
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
        <Link to={`/cart`}><svg xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 24 24" ><path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="16.5" cy="19.5" r="1.5"></circle></svg></Link>
        </li>
      </ul>
    </div>
  </section>
  <section id="caption">
    <h2>#Домашний стиль</h2>
    <p>Сэкономьте на купонах &amp; получите скидку до 70%</p>
  </section>
  <section id="product" className="section-p1">
    <div className="container">
      <div
        className="pro"
        onclick="window.location.href='product_details.html';"
      >
        <img src="images/product/f3.jpg" />
        <div className="description">
          <span>Rick owens</span>
          <h5>Flowers vol.2 shirt</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <div className='zeyld6'>
            <h4 className='lemagic'>3 400 ₽</h4>
          <h4 className='snovvy'>2400 ₽</h4>
          </div>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/s14.jpg" />
        <div className="description">
          <span>Rick owens</span>
          <h5>Print cotton hoodie</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <div className='zeyld6'>
            <h4 className='lemagic'>122 000 ₽</h4>
          <h4 className='snovvy'>100 000 ₽</h4>
          </div>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/s15.jpg" />
        <div className="description">
          <span>Rick owens</span>
          <h5>Blue-blue sky sweatshirt</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4 className='lemagic'>45 000 ₽</h4>
          <h4 className='snovvy'>20 000 ₽</h4>
          </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/s16.jpg" />
        <div className="description">
          <span>Rick owens</span>
          <h5>Pinky-winky sweatshirt</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>53 000 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/s5.jpg" />
        <div className="description">
          <span>Vetements</span>
          <h5>Cartoon Astronout T-shirt</h5>
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
        <img src="images/product/s6.jpg" />
        <div className="description">
          <span>Vetements</span>
          <h5>Green T-shirt</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <div className='zeyld6'>
            <h4 className='lemagic'>83 000 ₽</h4>
          <h4 className='snovvy'>55 000 ₽</h4>
          </div>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/s7.jpg" />
        <div className="description">
          <span>Maison Margiela</span>
          <h5>Rick and morty colab.</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>2 300 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/s8.jpg" />
        <div className="description">
          <span>Maison Margiela</span>
          <h5>Rick and morty colab. vol.2</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <div className='zeyld6'>
            <h4 className='lemagic'>2 500 ₽</h4>
          <h4 className='snovvy'>1 000 ₽</h4>
          </div>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/s1.jpg" />
        <div className="description">
          <span>Balenciaga</span>
          <h5>Limited sneakers</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4 className='lemagic'>9 000 ₽</h4>
          <h4 className='snovvy'>4 500 ₽</h4>
          </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/s2.jpg" />
        <div className="description">
          <span>Balenciaga</span>
          <h5>Rick owens type sneakers</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4 className='lemagic'>53 000 ₽</h4>
          <h4 className='snovvy'>45 000 ₽</h4>
          </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/s3.jpg" />
        <div className="description">
          <span>Nike</span>
          <h5>AER jorden 34</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>5 000 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/s4.jpg" />
        <div className="description">
          <span>Bape</span>
          <h5>Bape Sta</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4 className='lemagic'>23 000 ₽</h4>
          <h4 className='snovvy'>21 500 ₽</h4>
          </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/n8.jpg" />
        <div className="description">
          <span>Burberry</span>
          <h5>Gentel Shirt</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>9 400 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/n1.jpg" />
        <div className="description">
          <span>Burberry</span>
          <h5>WasGood Shirt</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>6 500 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/n2.jpg" />
        <div className="description">
          <span>Burberry</span>
          <h5>Checkred Shirt</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>7 600 ₽</h4>
        </div>
        <a href="#">
          <i className="fas fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="images/product/n7.jpg" />
        <div className="description">
          <span>Vetements</span>
          <h5>Vetements EMP shirt</h5>
          <div className="rate">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>5 000 ₽</h4>
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
      <div className="pro">
        <img src="images/product/s12.jpg" />
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
    </div>
  </section>
  <section id="page_number" className="section-p1">
    <a className="active" href="shop.html">
      1
    </a>
    <Link to={`/shop2`}>2</Link>
      <i className="fas fa-long-arrow-right" />
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

export default Shop