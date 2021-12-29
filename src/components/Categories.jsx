import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 100%;
	max-width: 1200px;
	height: 500px;
	background-color: black;
	display: flex;
	align-items: flex-end;
	justify-content: center;
`;

const Inner = styled.div`
	width: 90%;
	display: flex;
`;

const Wrapper2 = styled.div`
	width: 90%;
	max-width: 1200px;
	height: 600px;
	display: flex;
	background-color: #467fc1;
`;

const Categories = () => {
	return (
		<Container>
			<Wrapper>
				<Inner>
					{categories.map((item) => (
						<CategoryItem key={item.id} item={item} />
					))}
				</Inner>
			</Wrapper>
		</Container>
	);
};

export default Categories;
