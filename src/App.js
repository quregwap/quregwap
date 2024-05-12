import logo from './logo.svg';
import './style.css';
import './stule_conect.css';
import About from './kursa4';
import Main from './main';
import Cart from './cart';
import Loginform from './loginfrom';
import Shop from './shop';
import Shop2 from './shop2';
import ContactSection from './contactsession';
import ScrollToTop from ".//utils/scrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; */
/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {path: "/penis", 
  element: <About/>
},
{path: "/cart",
element: <Cart/>},

{path: "/loginform",
element: <Loginform/>},

{path: "/shop",
element: <Shop/>},

{path: "/shop2",
element: <Shop2/>},

{path: "/contactsection",
element: <ContactSection/>},

]); */
function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Router>
        <ScrollToTop></ScrollToTop>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/loginform" element={<Loginform/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shop2" element={<Shop2/>} />
          <Route path="/contactsection" element={<ContactSection/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;