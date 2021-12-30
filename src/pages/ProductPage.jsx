import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div`
	margin-top: 100px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 100%;
	max-width: 1200px;
	display: flex;
	margin: 40px 0;
`;

const ImgContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: right;
`;

const Image = styled.img`
	max-width: 450px;
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

const FilterSize = styled.select`
	width: 200px;
	height: 25px;
	border: 1px solid lightgray;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div``;

const AddButton = styled.button`
	width: 200px;
	height: 40px;
	border: none;
	background-color: ${(props) => (props.size ? 'black' : '#aaa')};
	color: white;
	font-size: 16px;
	font-weight: 300;
	cursor: pointer;
`;

const Warning = styled.p`
	color: ${(props) => (props.size ? 'transparent' : 'red')};
	font-size: 14px;
	margin-top: 5px;
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
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get('/products/find/' + id);
				setProduct(res.data);
				// 우선 첫번째 색상만 옵션으로 주기
				setColor(
					product.color[0].charAt(0).toUpperCase() + product.color[0].slice(1)
				);
			} catch {}
		};
		getProduct();
	}, [id, product]);

	useEffect(() => {}, [size]);

	const handleClick = () => {
		if (size) {
			dispatch(
				// update cart
				addProduct({ ...product, quantity, color, size })
			);
		}
	};

	const handleClickSize = (e) => {
		console.log(e);
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
					<Price>
						{product.price && product.price.toLocaleString() + `원`}
					</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>색상</FilterTitle>
							<FilterColor onChange={(e) => setColor(e.target.value)}>
								<FilterColorOption selected>{color}</FilterColorOption>
							</FilterColor>
						</Filter>
						<Filter>
							<FilterTitle>사이즈</FilterTitle>
							<FilterSize onChange={(e) => setSize(e.target.value)}>
								<FilterSizeOption selected disabled>
									사이즈 선택
								</FilterSizeOption>
								{product.size &&
									product.size.map((s) => (
										<FilterSizeOption key={s}>
											{s.toUpperCase()}
										</FilterSizeOption>
									))}
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AddButton size={size} onClick={handleClick}>
							장바구니에 담기
						</AddButton>
						<Warning size={size}>사이즈를 선택해주세요.</Warning>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default ProductPage;
