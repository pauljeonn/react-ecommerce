import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as LogoImg } from '../images/lieu-logo.svg';

const Container = styled.div`
	width: 100vw;
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 10;
`;

const Inner = styled.div`
	width: 100%;
	max-width: 1400px;
	background-color: white;
	padding: 0 70px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #eee;
	z-index: 10;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const MenuDropdown = styled.div`
	width: 180px;
	background-color: white;
	padding: 25px 45px 15px;
	border: 1px solid #eee;
	box-sizing: border-box;
	position: absolute;
	top: -265px;
	left: -40px;
	z-index: -1;
	opacity: 0;
`;

const DropdownItem = styled.div`
	font-size: 16px;
	margin-bottom: 10px;

	&:hover {
		color: gray;
	}
`;

const MenuItem = styled.div`
	height: 60px;
	width: 60px;
	display: flex;
	align-items: center;
	margin-left: 30px;
	position: relative;
	cursor: pointer;

	&:hover {
		color: gray;
	}

	&:hover ${MenuDropdown} {
		opacity: 1;
		top: 65px;
	}
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
	outline: none;
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
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
				<Inner>
					<Left>
						{/* <Language>EN</Language>
						<SearchContainer>
							<Input />
							<FiSearch style={{ color: 'gray', fontSize: '15' }} />
						</SearchContainer> */}

						<MenuItem>
							<FiMenu style={{ fontSize: '20px' }} />
							<MenuDropdown>
								<Link
									to={'/products/jackets'}
									style={{ textDecoration: 'none', color: 'black' }}
								>
									<DropdownItem>재킷/코트</DropdownItem>
								</Link>
								<Link
									to={'/products/knit'}
									style={{ textDecoration: 'none', color: 'black' }}
								>
									<DropdownItem>니트</DropdownItem>
								</Link>
								<Link
									to={'/products/hoodies'}
									style={{ textDecoration: 'none', color: 'black' }}
								>
									<DropdownItem>후디</DropdownItem>
								</Link>
								<Link
									to={'/products/shirts'}
									style={{ textDecoration: 'none', color: 'black' }}
								>
									<DropdownItem>셔츠</DropdownItem>
								</Link>
								<Link
									to={'/products/t-shirts'}
									style={{ textDecoration: 'none', color: 'black' }}
								>
									<DropdownItem>티셔츠</DropdownItem>
								</Link>
								<Link
									to={'/products/pants'}
									style={{ textDecoration: 'none', color: 'black' }}
								>
									<DropdownItem>바지</DropdownItem>
								</Link>
							</MenuDropdown>
						</MenuItem>
						<Link
							to={'/products/'}
							style={{ textDecoration: 'none', color: 'black' }}
						>
							SHOP ALL
						</Link>
					</Left>
					<Center>
						<Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
							<LogoImg style={{ height: '65px' }} />
						</Link>
					</Center>
					<Right>
						{/* <Link
							to="/products"
							style={{ textDecoration: 'none', color: 'black' }}
						>
							<MenuItem>SHOP</MenuItem>
						</Link> */}
						{/* <Link
							to="/register"
							style={{ textDecoration: 'none', color: 'black' }}
						>
							<MenuItem>REGISTER</MenuItem>
						</Link>
						<Link
							to="/login"
							style={{ textDecoration: 'none', color: 'black' }}
						>
							<MenuItem>LOGIN</MenuItem>
						</Link> */}
						<Link to="/cart">
							<MenuItem>
								<CartContainer>
									<Badge quantity={quantity}>{quantity}</Badge>
									<FiShoppingCart style={{ fontSize: '20px' }} />
								</CartContainer>
							</MenuItem>
						</Link>
					</Right>
				</Inner>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
