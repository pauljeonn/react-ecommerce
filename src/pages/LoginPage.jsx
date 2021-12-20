import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div`
	margin-top: 70px;
	width: 100%;
	position: relative;
	background-color: lightgray;
`;

const ImgContainer = styled.div`
	width: 100%;
	background-color: lightgray;
	opacity: 0.5;
	display: flex;
	justify-content: center;
`;

const Image = styled.img`
	width: 50%;
	object-fit: cover;
`;

const Wrapper = styled.div`
	width: 400px;
	height: 300px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 2;
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 20px 0;
`;

const Title = styled.h1`
	font-weight: 300;
	font-size: 25px;
	margin-bottom: 20px;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	width: 200px;
	height: 25px;
	margin-bottom: 10px;
`;

const Button = styled.button`
	height: 40px;
	background-color: black;
	color: white;
	font-weight: 400;
	font-size: 15px;
	border: none;
	cursor: pointer;

	&:disabled {
		background-color: lightgray;
		cursor: not-allowed;
	}
`;

const Error = styled.span`
	color: red;
	font-size: 14px;
	margin-top: 5px;
	font-weight: 300;
`;

const RedirectContainer = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	text-align: center;
`;

const Redirect = styled.a`
	margin-top: 5px;
	font-size: 15px;
	font-weight: 300;
	cursor: pointer;

	&:hover {
		color: teal;
	}
`;

const LoginPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const { isFetching, error } = useSelector((state) => state.user);

	const handleClick = (e) => {
		e.preventDefault();
		login(dispatch, { username, password }); //apiCalls
	};

	return (
		<Container>
			<Navbar />
			<ImgContainer>
				<Image src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain1896780020211102143417.jpg" />
			</ImgContainer>
			<Wrapper>
				<Title>LOGIN</Title>
				<Form>
					<Input
						placeholder="이메일"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Input
						type="password"
						placeholder="비밀번호"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button onClick={handleClick} disabled={isFetching}>
						로그인
					</Button>
					{error && <Error>Something went wrong...</Error>}
					<RedirectContainer>
						<Link
							to="/register"
							style={{ textDecoration: 'none', color: 'black' }}
						>
							<Redirect>회원가입 ></Redirect>
						</Link>
					</RedirectContainer>
				</Form>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default LoginPage;
