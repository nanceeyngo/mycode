// import logo from './logo.svg';
import './App.css';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import './components/main.css';
import { CartProvider } from './context/Globalcontext';

function App() {
  return (
    <CartProvider>
    <div className="container">
      <ProductList/>
      <hr></hr>
      <Cart />
    </div>
    </CartProvider>
  );
}

export default App;
