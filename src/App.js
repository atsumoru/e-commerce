import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import ShopContextProvider from './context/Shop-context';

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Shop/>}/> 
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
// single / means main page 