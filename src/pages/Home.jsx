import React from 'react';
import styled from 'styled-components';
import About from '../components/About';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';

const Container = styled.div`
	width: 100vw;
`;

const Home = () => {
	return (
		<Container>
			<Navbar />
			<Slider />
			<Categories />
			<About />
			{/* <ProductList isHome={true} /> */}
			<Footer />
		</Container>
	);
};

export default Home;
