import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';

const Info = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	background-color: rgba(50, 50, 50, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: all 0.5s ease;
	cursor: pointer;
`;

const Container = styled.div`
	flex: 1;
	margin: 0 20px 20px;
	min-width: 240px;
	height: 350px;
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

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;

	&:hover {
		transform: scale(1.1);
		cursor: pointer;
	}
`;

const Product = ({ item }) => {
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<Icon>
					<FiSearch style={{ color: 'gray', fontSize: '20' }} />
				</Icon>
				<Icon>
					<FiShoppingCart style={{ color: 'gray', fontSize: '20' }} />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;