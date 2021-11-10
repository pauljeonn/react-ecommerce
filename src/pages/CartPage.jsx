import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';

const Container = styled.div``;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	padding: 40px 0;
	margin-top: 20px;
`;

const Left = styled.div`
	flex: 3;
	padding: 0 40px;
	display: flex;
	flex-direction: column;
`;

const LeftTitle = styled.h1`
	font-weight: 400;
	font-size: 20px;
	margin-bottom: 40px;
`;

const Info = styled.div``;

const Product = styled.div``;

const ProductDetail = styled.div`
	display: flex;
`;

const Image = styled.img`
	width: 150px;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
`;

const ProductName = styled.div`
	font-weight: 350;
	font-size: 14px;
`;

const ProductPrice = styled.div`
	font-weight: 350;
	font-size: 14px;
	margin-bottom: 20px;
`;

const ProductSize = styled.div`
	font-weight: 300;
	font-size: 14px;
`;

const ProductColor = styled.div`
	font-weight: 300;
	font-size: 14px;
`;

const ProductAmountContainer = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
`;

const ProductAmount = styled.div`
	font-weight: 300;
	font-size: 14px;
`;

const Hr = styled.hr`
	background-color: lightgray;
	border: none;
	height: 1px;
	margin: 20px 0;
`;

const Right = styled.div`
	margin-left: 40px;
	padding: 0 40px;
	flex: 2;
	display: flex;
	flex-direction: column;
`;

const RightTitle = styled.h1`
	font-weight: 400;
	font-size: 20px;
	margin-bottom: 40px;
`;

const RightButton = styled.button`
	height: 40px;
	width: 200px;
	background-color: ${(props) => (props.type === 'filled' ? 'teal' : 'black')};
	color: white;
	font-weight: 400;
	border: none;
	cursor: pointer;
	margin-top: 10px;
`;

const Summary = styled.div`
	width: 70%;
	margin-bottom: 40px;
`;

const SummaryItem = styled.div`
	display: flex;
	justify-content: space-between;
`;

const SummaryItemText = styled.div`
	font-weight: 300;
	font-size: 15px;
	font-weight: ${(props) => props.type === 'total' && '500'};
`;

const SummaryItemPrice = styled.div`
	font-weight: 300;
	font-size: 15px;
	font-weight: ${(props) => props.type === 'total' && '500'};
`;

const CartPage = () => {
	return (
		<Container>
			<Navbar />
			<Wrapper>
				<Left>
					<LeftTitle>YOUR SHOPPING BAG</LeftTitle>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="https://cdn.shopify.com/s/files/1/1003/3354/products/Front_cb50b5f0-e1e2-4f4a-8ada-633d640cd761_x1800.jpg?v=1630448682" />
								<Details>
									<ProductName>PULLOVER HOODIE</ProductName>
									<ProductPrice>KRW 80,000</ProductPrice>
									<ProductSize>SIZE: M</ProductSize>
									<ProductColor>COLOR: GREEN</ProductColor>
									<ProductAmountContainer>
										<FiPlus />
										<ProductAmount>1</ProductAmount>
										<FiMinus />
									</ProductAmountContainer>
								</Details>
							</ProductDetail>
							<Hr />
						</Product>
						<Product>
							<ProductDetail>
								<Image src="https://cdn.shopify.com/s/files/1/1003/3354/products/Front_9d2a950c-e04e-4ff7-9a25-97a2a9eb0cc1_360x.jpg?v=1630448714" />
								<Details>
									<ProductName>TRACKPANTS</ProductName>
									<ProductPrice>KRW 60,000</ProductPrice>
									<ProductSize>SIZE: M</ProductSize>
									<ProductColor>COLOR: YELLOW</ProductColor>
									<ProductAmountContainer>
										<FiPlus />
										<ProductAmount>1</ProductAmount>
										<FiMinus />
									</ProductAmountContainer>
								</Details>
							</ProductDetail>
							<Hr />
						</Product>
					</Info>
				</Left>
				<Right>
					<RightTitle>ORDER SUMMARY</RightTitle>
					<Summary>
						<SummaryItem>
							<SummaryItemText>SUBTOTAL</SummaryItemText>
							<SummaryItemPrice>KRW 140,000</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>SHIPPING</SummaryItemText>
							<SummaryItemPrice>KRW 30,000</SummaryItemPrice>
						</SummaryItem>
						<Hr />
						<SummaryItem>
							<SummaryItemText type="total">TOTAL</SummaryItemText>
							<SummaryItemPrice type="total">KRW 170,000</SummaryItemPrice>
						</SummaryItem>
					</Summary>
					<RightButton type="filled">CHECKOUT NOW</RightButton>
					<RightButton>CONTINUE SHOPPING</RightButton>
				</Right>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default CartPage;
