import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductListPage from './pages/ProductListPage';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/products" element={<ProductListPage />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
