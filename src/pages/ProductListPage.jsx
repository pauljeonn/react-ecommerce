import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';

const Container = styled.div`
	margin-top: 70px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	padding-top: 30px;
	padding-left: 40px;
`;

const FilterContainer = styled.div`
	width: 100%;
	max-width: 1500px;
	display: flex;
	justify-content: space-between;
	margin: 40px;
	padding: 0 40px;
	box-sizing: border-box;
`;

const Filter = styled.div``;

const Select = styled.select`
	margin-left: 10px;
	width: 100px;
`;

const Option = styled.option``;

const ProductListContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const ProductListPage = () => {
	const location = useLocation();
	const category = location.pathname.split('/')[2];
	const [filters, setFilter] = useState({});
	const [sort, setSort] = useState('newest');

	const handleFilters = (e) => {
		if (e.target.value === '전체') {
			setFilter({});
		} else {
			setFilter({
				...filters, // to contain both filters
				[e.target.name]: e.target.value,
			});
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Container>
			<Navbar />
			<Title>
				{category && category.charAt(0).toUpperCase() + category.slice(1)}
			</Title>
			<FilterContainer>
				<Filter>
					필터
					<Select name="color" onChange={handleFilters}>
						{/* <Option disabled selected>
							색상
						</Option> */}
						<Option selected>전체</Option>
						<Option>블랙</Option>
						<Option>그레이</Option>
						<Option>화이트</Option>
						<Option>브라운</Option>
						<Option>그린</Option>
						<Option>블루</Option>
					</Select>
					<Select name="size" onChange={handleFilters}>
						{/* <Option disabled selected>
							사이즈
						</Option> */}
						<Option selected>전체</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					정렬
					<Select onChange={(e) => setSort(e.target.value)}>
						{/* <Option selected>추천순</Option> */}
						<Option selected value="newest">
							신상품순
						</Option>
						<Option value="price-asc">가격 낮은순</Option>
						<Option value="price-desc">가격 높은순</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<ProductListContainer>
				<ProductList category={category} filters={filters} sort={sort} />
			</ProductListContainer>
			<Footer />
		</Container>
	);
};
export default ProductListPage;
