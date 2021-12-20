import React from 'react';
import { MdAllInbox, MdAllInclusive } from 'react-icons/md';
import styled from 'styled-components';
import About from '../components/About';
import Announcement from '../components/Announcement';
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
			{/* <Announcement /> */}
			<Slider />
			<About />
			<Categories />
			<ProductList isHome={true} />
			<Footer />
		</Container>
	);
};

export default Home;
