import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Info = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	background-color: rgba(50, 50, 50, 0.3);
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: all 0.5s ease;
	cursor: pointer;
`;

const Container = styled.div`
	flex: 1;
	margin: 2%;
	min-width: 21%;
	max-width: 21%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover ${Info} {
		opacity: 1;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Product = ({ item }) => {
	return (
		<Container>
			<Link to={`/product/${item._id}`}>
				<Image src={item.img} />
				<Info>자세히 보기</Info>
			</Link>
		</Container>
	);
};

export default Product;
