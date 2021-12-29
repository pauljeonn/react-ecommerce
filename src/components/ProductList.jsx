import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { publicRequest } from '../requestMethods';

const Container = styled.div`
	width: 100%;
	max-width: 1600px;
	margin-top: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
`;

const ProductList = ({ category, filters, sort, isHome }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	// Whenever category props is given
	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await publicRequest.get(
					category ? `/products?category=${category}` : '/products'
				);
				setProducts(res.data); // set products
			} catch (err) {}
		};
		getProducts();
	}, [category]);

	useEffect(() => {
		!isHome &&
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
				[...prev].sort((a, b) => new Date(b.released) - new Date(a.released))
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
					: isHome
					? products
							.slice(0, 8)
							.map((item) => <Product key={item._id} item={item} />)
					: filteredProducts.map((item) => (
							<Product key={item._id} item={item} />
					  ))}
			</Wrapper>
		</Container>
	);
};

export default ProductList;
