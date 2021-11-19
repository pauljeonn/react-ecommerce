import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
	background-color: teal;
	color: white;
	font-weight: 400;
	font-size: 15px;
	border: none;
	cursor: pointer;
`;

const RedirectContainer = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
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
	return (
		<Container>
			<Navbar />
			<ImgContainer>
				<Image src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain1896780020211102143417.jpg" />
			</ImgContainer>
			<Wrapper>
				<Title>LOGIN</Title>
				<Form>
					<Input placeholder="email address" />
					<Input placeholder="password" />
					<Button>SIGN IN</Button>
					<RedirectContainer>
						<Redirect>Forgot password?</Redirect>
						<Link
							to="/register"
							style={{ textDecoration: 'none', color: 'black' }}
						>
							<Redirect>Create a new account?</Redirect>
						</Link>
					</RedirectContainer>
				</Form>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default LoginPage;
