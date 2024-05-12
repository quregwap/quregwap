import { Footer } from './components/footer/footer';
import './style.css';
import { Link } from 'react-router-dom';
function Main() {
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
          <img src="images/forulogo.png"  />
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
            <Link to={`/cart`}><svg xmlns="http://www.w3.org/2000/svg" fill='white' width="20" height="20" viewBox="0 0 24 24" ><path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="16.5" cy="19.5" r="1.5"></circle></svg></Link>
            </li>
          </ul>
        </div>
      </section>
      <section id="main">
        <div className="left">
          <h2>Большой ассортимент</h2>
          <h1>На все товары</h1>
          <p>Скидки до 70%!</p>
          <Link to={`/shop`}><input type="button" defaultValue="Купить сейчас!" /></Link>
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
          <h6>Поддержка 24/7</h6>
        </div>
      </section>
      <section id="product" className="section-p1">
        <h2>Товары в наличии</h2>
        {/* <p>New modern Design Collection</p> */}
        <div className="container">
          <div
            className="pro"
            onclick="window.location.href='product_details.html';"
          >
            <img src="images/product/f3.jpg" />
            <div className="description">
              <span>Vetements</span>
              <h5>I&lt;3 Paris </h5>
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
            <img src="https://ir.ozone.ru/s3/multimedia-i/wc1000/6625865574.jpg" />
            <div className="description">
              <span>Balenciaga</span>
              <h5>Zeyld T-shirt</h5>
              <div className="rate">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>40 000 ₽</h4>
            </div>
            <a href="#">
              <i className="fas fa-shopping-cart cart" />
            </a>
          </div>
          <div className="pro">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mx4Z8J-2bt0ZL9B2ATHTB6nI7RpCz49vLg&usqp=CAU" />
            <div className="description">
              <span>Vetements</span>
              <h5>Germany T-shirt</h5>
              <div className="rate">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>27 000 ₽</h4>
            </div>
            <a href="#">
              <i className="fas fa-shopping-cart cart" />
            </a>
          </div>
          <div className="pro">
            <img src="images/product/n4.jpg" />
            <div className="description">
              <span>Vetements</span>
              <h5>Shirt Limited Edition</h5>
              <div className="rate">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h4>9 000 ₽</h4>
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
              <h4>83 000 ₽</h4>
            </div>
            <a href="#">
              <i className="fas fa-shopping-cart cart" />
            </a>
          </div>
          <div className="pro">
            <img src="images/product/12.jpg" />
            <div className="description">
              <span>Vetements</span>
              <h5>Сheckered shirt</h5>
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
        </div>
      </section>
      <section id="banner" className="section-m1">
        <h4>Гарантия на товары</h4>
        <h2>
          Возвращаем <span>100%</span> стоимости на бракованые товары
        </h2>
        <Link to={`/contactsection`}><button>Узнать больше</button></Link>
      </section>
      <section id="product" className="section-p1">
        <h2>Новая коллекция</h2>
        <div className="container">
          <div className="pro">
            <img src="images/product/f4.jpg" />
            <div className="description">
              <span>Balenciaga</span>
              <h5>Sakura Japan shirt</h5>
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
            <img src="images/product/f5.jpg" />
            <div className="description">
              <span>Balenciaga</span>
              <h5>Flowers shirt</h5>
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
            <img src="images/product/3.jpg" />
            <div className="description">
              <span>Balenciaga</span>
              <h5>NBA Celtics shorts</h5>
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
              <h4>5 000 ₽</h4>
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
              <h4>9 000 ₽</h4>
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
              <h4>53 000 ₽</h4>
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
            <img src="images/product/n6.jpg" />
            <div className="description">
              <span>Balenciaga</span>
              <h5>Lepricon knickerbockers</h5>
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
        </div>
      </section>
      <section id="small-banner" className="section-p1">
        <div className="banner-box">
          <h4>Особое предложение</h4>
          <h2>2+1</h2>
          <span>Лучшие вещи класса "Lux"</span>
          <Link to={`/shop`}><button>Коллекция</button></Link>
        </div>
        <div className="banner-box bb2">
          <h4>Весна / Лето</h4>
          <h2>Новая коллекция</h2>
          <span>Лучшие вещи класса "Lux"</span>
          <Link to={`/shop2`}><button>Коллекция</button></Link>
        </div>
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
  
  export default Main;
  