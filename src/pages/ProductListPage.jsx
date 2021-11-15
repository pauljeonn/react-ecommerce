import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';

const Container = styled.div`
	width: 100%;
`;

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
	const location = useLocation();
	const category = location.pathname.split('/')[2];
	const [filters, setFilter] = useState({});
	const [sort, setSort] = useState('newest');

	const handleFilters = (e) => {
		setFilter({
			...filters, // to contain both filters
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Container>
			<Navbar />
			<Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
			<FilterContainer>
				<Filter>
					Filter Products:
					<Select name="color" onChange={handleFilters}>
						<Option disabled selected>
							Color
						</Option>
						<Option>Black</Option>
						<Option>White</Option>
						<Option>Brown</Option>
					</Select>
					<Select name="size" onChange={handleFilters}>
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
					<Select onChange={(e) => setSort(e.target.value)}>
						<Option value="newest">최신순</Option>
						<Option value="price-asc">가격 낮은순</Option>
						<Option value="price-desc">가격 높은순</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<ProductList category={category} filters={filters} sort={sort} />
			<Footer />
		</Container>
	);
};
export default ProductListPage;
