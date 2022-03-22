import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/headers/Header';
import Home from './views/home/Home';
import Products from './views/products/Products';

function App() {
  return (
    <>
      <Header/>
      
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        {/* Header, Buscardor */}
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </ul>
    </>
  );
}

export default App;
