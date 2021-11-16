import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';

const Container = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const ProductList = ({ category, filters, sort }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	// Whenever category props is given
	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					category
						? `http://localhost:4000/api/products?category=${category}`
						: 'http://localhost:4000/api/products'
				);
				setProducts(res.data); // set products
			} catch (err) {}
		};
		getProducts();
	}, [category]);

	useEffect(() => {
		category && // if there is category
			// set filtered products
			setFilteredProducts(
				products.filter((item) =>
					Object.entries(filters).every(([key, value]) =>
						item[key].includes(value)
					)
				)
			);
	}, [products, category, filters]); // whenever one of these change

	// useEffect for sort
	useEffect(() => {
		if (sort === 'newest') {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.released - b.released)
			);
		} else if (sort === 'price-asc') {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.price - b.price)
			);
		} else if (sort === 'price-desc') {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => b.price - a.price)
			);
		}
	}, [sort]);

	return (
		<Container>
			<Wrapper>
				{category
					? filteredProducts.map((item) => (
							<Product key={item._id} item={item} />
					  ))
					: products
							.slice(0, 8)
							.map((item) => <Product key={item._id} item={item} />)}
			</Wrapper>
		</Container>
	);
};

export default ProductList;
