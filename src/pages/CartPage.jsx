import React, { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
	margin-top: 100px;
`;

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
	font-size: 16px;
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
	const cart = useSelector((state) => state.cart);
	const navigate = useNavigate();

	const goBack = () => {
		navigate('/products');
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Container>
			<Navbar />
			<Wrapper>
				<Left>
					<LeftTitle>장바구니</LeftTitle>
					<Info>
						{cart.products.map((product) => (
							<Product key={product._id}>
								<ProductDetail>
									<Image src={product.img} />
									<Details>
										<ProductName>{product.title}</ProductName>
										<ProductPrice>
											{product.price.toLocaleString() + ` 원`}
										</ProductPrice>
										<ProductColor>{`Color: ${product.color}`}</ProductColor>
										<ProductSize>{`Size: ${product.size}`}</ProductSize>
										{/* <ProductAmountContainer>
											<FiPlus />
											<ProductAmount>{product.quantity}</ProductAmount>
											<FiMinus />
										</ProductAmountContainer> */}
									</Details>
								</ProductDetail>
								<Hr />
							</Product>
						))}
					</Info>
				</Left>
				<Right>
					<RightTitle>주문 요약</RightTitle>
					<Summary>
						<SummaryItem>
							<SummaryItemText>SUBTOTAL</SummaryItemText>
							<SummaryItemPrice>{`${cart.total.toLocaleString()} 원`}</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>SHIPPING</SummaryItemText>
							<SummaryItemPrice>
								{cart.total === 0 ? '0 원' : '30,000 원'}
							</SummaryItemPrice>
						</SummaryItem>
						<Hr />
						<SummaryItem>
							<SummaryItemText type="total">TOTAL</SummaryItemText>
							<SummaryItemPrice type="total">
								{cart.total === 0
									? '0 원'
									: `${(cart.total + 30000).toLocaleString()} 원`}
							</SummaryItemPrice>
						</SummaryItem>
					</Summary>
					<RightButton type="filled">주문하기</RightButton>
					<RightButton onClick={goBack}>계속 쇼핑하기</RightButton>
				</Right>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default CartPage;
