import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { products } from '../data';

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
`;

const ProductList = () => {
	return (
		<Container>
			{products.map((item) => (
				<Product key={item.id} item={item} />
			))}
		</Container>
	);
};

export default ProductList;
