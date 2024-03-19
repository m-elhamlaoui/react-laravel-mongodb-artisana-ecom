import SimilarProducts from "./Components/SimilarProducts/SimilarProducts";
import Product from "./Pages/Product";
import products from './Components/SimilarProducts/products';

function App() {
  return (
    <div>
      {/* <Product /> */}
      <SimilarProducts products={products}/>
      
    </div>
  );
}

export default App;
