import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as LogoImg } from '../images/lieu-logo.svg';

const Container = styled.div``;

const Wrapper = styled.div`
	width: 100%;
	height: 70px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;
	background-color: white;
	padding: 10px 20px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #eee;
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
	font-size: 45px;
	font-weight: 700;
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
	background-color: ${(props) =>
		props.quantity === 0 ? 'transparent' : 'red'};
	color: ${(props) => (props.quantity === 0 ? 'transparent' : 'white')};
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
						<LogoImg />
					</Link>
				</Center>
				<Right>
					<Link
						to="/register"
						style={{ textDecoration: 'none', color: 'black' }}
					>
						<MenuItem>REGISTER</MenuItem>
					</Link>
					<Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
						<MenuItem>SIGN IN</MenuItem>
					</Link>
					<Link to="/cart">
						<MenuItem>
							<CartContainer>
								<Badge quantity={quantity}>{quantity}</Badge>
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
