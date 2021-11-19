import React from 'react';
import { MdAllInbox, MdAllInclusive } from 'react-icons/md';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Announcement />
			<Slider />
			<Categories />
			<ProductList isHome={true} />
			<Footer />
		</div>
	);
};

export default Home;
