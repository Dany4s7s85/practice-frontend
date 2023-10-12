import './App.css';
import Order from './pages/Order/Order';

import { Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
    
  );
}

export default App;
