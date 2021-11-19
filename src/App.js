import './app.css';
import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';

function App() {
	const user = false;

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/products" element={<ProductListPage />}></Route>
					<Route
						path="/products/:category"
						element={<ProductListPage />}
					></Route>
					<Route path="/product/:id" element={<ProductPage />}></Route>
					<Route path="/cart" element={<CartPage />}></Route>
					<Route
						path="/login"
						element={user ? <Navigate replace to="/" /> : <LoginPage />}
					></Route>
					<Route
						path="/register"
						element={user ? <Navigate replace to="/" /> : <RegisterPage />}
					></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
