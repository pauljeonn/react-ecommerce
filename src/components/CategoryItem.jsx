import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	flex: 1;
	height: 60vh;
	position: relative;
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 0.8;
`;

const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	margin-top: 5px;
	margin-left: 5px;
	color: black;
`;

const Button = styled.button`
	margin-top: 5px;
	margin-left: 5px;
	width: 100px;
	height: 45px;
	font-size: 16px;
	background-color: white;
	border: 2px solid black;
	cursor: pointer;

	&:hover {
		background-color: black;
		color: white;
	}
`;

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Img src={item.img} />
			<Info>
				<Title>{item.title}</Title>
				<Link to={`/products/${item.category}`}>
					<Button>SHOP</Button>
				</Link>
			</Info>
		</Container>
	);
};

export default CategoryItem;
