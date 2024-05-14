import { Footer } from './components/footer/footer';
import './style.css';
import { Link } from 'react-router-dom';
function Cart(){
  const handleClick = () => {
    alert('Купон применен');
  } 
    return(<>
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
        <section id="caption" className="cart-caption">
          <h2>#Корзина</h2>
          <p>Предоставь купон и получи скидку до 70%</p>
        </section>
        <section id="cart" className="section-p1">
          <table className='iri'>
            <thead>
              <tr>
                <td>Убрать</td>
                <td>Вид</td>
                <td>Название товара</td>
                <td>Цена</td>
                <td>Кол-во</td>
                <td>Итого</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#">
                    <i className="fal fa-times-circle" />
                  </a>
                </td>
                <td>
                  <img src="images/product/f1.jpg" />
                </td>
                <td>1</td>
                <td>10 000 ₽</td>
                <td>
                  <input type="number" defaultValue={1} />
                </td>
                <td>10 000 ₽</td>
              </tr>
              <tr>
                <td>
                  <a href="#">
                    <i className="fal fa-times-circle" />
                  </a>
                </td>
                <td>
                  <img src="images/product/s7.jpg" />
                </td>
                <td>2</td>
                <td>15 000 ₽</td>
                <td>
                  <input type="number" defaultValue={1} />
                </td>
                <td>15 000 ₽</td>
              </tr>
              <tr>
                <td>
                  <a href="#">
                    <i className="fal fa-times-circle" />
                  </a>
                </td>
                <td>
                  <img src="images/product/s13.jpg" />
                </td>
                <td>3</td>
                <td>20 000 ₽</td>
                <td>
                  <input type="number" defaultValue={1} />
                </td>
                <td>20 000 ₽</td>
              </tr>
              <tr>
                <td>
                  <a href="#">
                    <i className="fal fa-times-circle" />
                  </a>
                </td>
                <td>
                  <img src="images/product/s3.jpg" />
                </td>
                <td>Nike Shoes</td>
                <td>25 000 ₽</td>
                <td>
                  <input type="number" defaultValue={1} />
                </td>
                <td>25 000 ₽</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="newsletter">
        <div className="text">
          <h4>Введите купон</h4>
          <p>
            Введи купон и получи скидку до{" "}
            <span>70%!!!</span>
          </p>
        </div>
        <div className='zov'><input placeholder="Введите купон" class="input-zov" name="email" type="email"/>
   <button onClick={handleClick} class="buttonzov">Ввести</button> </div>
      </section>
        <Footer/>
      </>      

    )
}
export default Cart