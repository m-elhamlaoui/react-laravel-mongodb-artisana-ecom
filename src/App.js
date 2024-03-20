
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,RouterProps } from 'react-router-dom';
import Favoris from './Pages/Favoris'
import Login from './Pages/Login'
import Panier from './Pages/Panier'
import Hero from './Components/Hero/Hero';





function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Hero/>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
