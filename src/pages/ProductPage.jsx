import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

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
	const location = useLocation();
	const id = location.pathname.split('/')[2];
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [color, setColor] = useState('');
	const [size, setSize] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get('/products/find/' + id);
				setProduct(res.data);
			} catch {}
		};
		getProduct();
	}, [id, product]);

	const handleClick = () => {
		dispatch(
			// update cart
			addProduct({ ...product, quantity, color, size })
		);
	};

	return (
		<Container>
			<Navbar />
			<Wrapper>
				<ImgContainer>
					<Image src={product.img} />
				</ImgContainer>
				<InfoContainer>
					<Title>{product.title}</Title>
					<Desc>{product.desc}</Desc>
					<Price>{product.price}</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>COLOR</FilterTitle>
							<FilterColor onChange={(e) => setColor(e.target.value)}>
								{product.color &&
									product.color.map((c) => (
										<FilterColorOption key={c}>
											{c.charAt(0).toUpperCase() + c.slice(1)}
										</FilterColorOption>
									))}
							</FilterColor>
						</Filter>
						<Filter>
							<FilterTitle>SIZE</FilterTitle>
							<FilterSize>
								{product.size &&
									product.size.map((s) => (
										<FilterSizeOption key={s} onClick={() => setSize(s)}>
											{s}
										</FilterSizeOption>
									))}
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AddButton onClick={handleClick}>ADD TO CART</AddButton>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default ProductPage;
