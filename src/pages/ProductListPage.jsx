import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';

const Container = styled.div``;

const Title = styled.h1`
	margin: 40px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 40px;
`;

const Filter = styled.div``;

const Select = styled.select`
	margin-left: 10px;
`;

const Option = styled.option``;

const ProductListPage = () => {
	return (
		<Container>
			<Navbar />
			<Title>Shirts</Title>
			<FilterContainer>
				<Filter>
					Filter Products:{' '}
					<Select>
						<Option disabled selected>
							Color
						</Option>
						<Option>Black</Option>
						<Option>White</Option>
						<Option>Brown</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Size
						</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					Sort Products
					<Select>
						<Option selected>최신순</Option>
						<Option>가격 낮은순</Option>
						<Option>가격 높은순</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<ProductList />
			<Footer />
		</Container>
	);
};
export default ProductListPage;
