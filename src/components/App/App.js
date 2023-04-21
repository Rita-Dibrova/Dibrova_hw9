import {BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Home from '../Home/Home';
import Main from '../Main/Main';
import Contacts from '../Contacts/Contacts';
import Products from '../Products/Products';
import ProductItem from '../ProductItem/ProductItem';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ErrorPage from '../ErrorPage/ErrorPage';

const products = [ 'Cloth', 'Shoes', 'Accessories', 'Bags', 'Jewelry'];

function App() {
  return (
    <div className="App">
      <h2>My Shop</h2>
       <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink className="link" to={"/"}>
                Main
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/home"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/contacts"}>
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/private"}>
                Private Route
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/products"}>
                Products
              </NavLink>
            </li>
            {products.map(product => {
              return (
                <li key={product}>
                  <NavLink className="link" to={`/products/${product}`}>
                  Product: {product}
                  </NavLink>
                </li>
              )
            })}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route path="home" element={<Home/>}/>
        </Route>
        <Route path="/contacts" element={<Contacts />} />
        <Route path='/products' element={<Products />} > 
          <Route path='/products/:product' element={<ProductItem products={products} />} />
        </Route>
        <Route path='/private' element={<PrivateRoute /> } />
        <Route path='/error' element={<ErrorPage /> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;