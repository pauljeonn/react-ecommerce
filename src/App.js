import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/products" element={<ProductListPage />}></Route>
					<Route path="/product" element={<ProductPage />}></Route>
					<Route path="/register" element={<RegisterPage />}></Route>
					<Route path="/login" element={<LoginPage />}></Route>
					<Route path="/cart" element={<CartPage />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
