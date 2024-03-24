import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';
import SimilarProducts from "./Components/SimilarProducts/SimilarProducts";
import products from './Components/SimilarProducts/products';
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";

import Loginform from './Components/loginform/loginform'
import Createaccountform from './Components/createcompte/createaccount'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import CartPage from './Components/cart/cart';



function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/createaccount" element={<Createaccountform />} />
          <Route path="/productinfos" element={<ProductDisplay />} />
          <Route path="/products" element={<SimilarProducts products={products}/>} />
          <Route path="/cart" element={<CartPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
