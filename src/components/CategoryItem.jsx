import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	flex: 1;
	margin: 5px;
	height: 60vh;
	position: relative;
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 0.9;
`;

const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	/* align-items: center; */
	/* justify-content: center; */
`;

const Title = styled.h1`
	margin-top: 5px;
	margin-left: 5px;
`;

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Img src={item.img} />
			<Info>
				<Title>{item.title}</Title>
			</Info>
		</Container>
	);
};

export default CategoryItem;
