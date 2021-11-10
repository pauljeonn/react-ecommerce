import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;

const Wrapper = styled.div`
	display: flex;
	margin: 40px 0;
`;
const ImgContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: right;
`;
const Image = styled.img`
	height: 80vh;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 0 50px;
`;
const Title = styled.h1`
	font-weight: 300;
`;
const Desc = styled.p`
	font-weight: 300;
	margin: 20px 0;
	width: 60%;
`;
const Price = styled.p`
	font-weight: 200;
	font-size: 20px;
`;

const FilterContainer = styled.div`
	margin: 20px 0;
	display: flex;
	flex-direction: column;
`;

const Filter = styled.div`
	font-weight: 200;
	margin-bottom: 20px;
`;

const FilterTitle = styled.div`
	margin-bottom: 5px;
`;

const FilterColor = styled.select`
	width: 200px;
	height: 25px;
	border: 1px solid lightgray;
`;

const FilterColorOption = styled.option``;

const FilterSize = styled.div`
	display: flex;
`;

const FilterSizeOption = styled.div`
	width: 30px;
	height: 25px;
	border: 1px solid lightgray;
	margin-right: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 300;
	cursor: pointer;
`;

const AddContainer = styled.div``;

const AddButton = styled.button`
	width: 200px;
	height: 35px;
	border: none;
	background-color: black;
	color: white;
	font-weight: 300;
	cursor: pointer;
`;

const ProductPage = () => {
	return (
		<Container>
			<Navbar />
			<Wrapper>
				<ImgContainer>
					<Image src="https://cdn.shopify.com/s/files/1/1003/3354/products/Front_98ee7e56-3968-4910-9f92-3aefaf9f8d99_1920x.jpg?v=1634592906" />
				</ImgContainer>
				<InfoContainer>
					<Title>California Blazer</Title>
					<Desc>
						The double-breasted California Blazer is designed as an
						approachable, versatile sportscoat with voluminous proportions to
						function as outerwear.
					</Desc>
					<Price>KRW 400,000</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>COLOR</FilterTitle>
							<FilterColor>
								<FilterColorOption>Gray</FilterColorOption>
								<FilterColorOption>Brown</FilterColorOption>
							</FilterColor>
						</Filter>
						<Filter>
							<FilterTitle>SIZE</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AddButton>ADD TO CART</AddButton>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default ProductPage;
