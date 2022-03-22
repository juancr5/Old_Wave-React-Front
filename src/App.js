import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './views/home/Home';
import Products from './views/products/Products';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
    </Routes>
  );
}

export default App;
