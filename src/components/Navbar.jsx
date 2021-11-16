import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = styled.div`
	height: 60px;
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
`;

const SearchContainer = styled.div`
	border: 1px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const MenuItem = styled.div`
	margin-left: 25px;
`;

const CartContainer = styled.div`
	position: relative;
`;

const Badge = styled.div`
	width: 16px;
	height: 16px;
	background-color: red;
	color: white;
	border-radius: 50%;
	position: absolute;
	top: -35%;
	right: -50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 9px;
`;

const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity);

	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<FiSearch style={{ color: 'gray', fontSize: '15' }} />
					</SearchContainer>
				</Left>
				<Center>
					<Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
						<Logo>JEONN</Logo>
					</Link>
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<Link to="/cart">
						<MenuItem>
							<CartContainer>
								<Badge>{quantity}</Badge>
								<FiShoppingCart />
							</CartContainer>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
