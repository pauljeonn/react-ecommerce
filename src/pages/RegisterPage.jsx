import React from 'react';
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
	height: 350px;
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
	padding: 30px 0;
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
	margin-top: 20px;
	height: 40px;
	background-color: teal;
	color: white;
	font-weight: 400;
	font-size: 15px;
	border: none;
	cursor: pointer;
`;

const RegisterPage = () => {
	return (
		<Container>
			<Navbar />
			<ImgContainer>
				<Image src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain1896770020211102134657.jpg" />
			</ImgContainer>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder="name" />
					<Input placeholder="email address" />
					<Input placeholder="phone number" />
					<Input placeholder="password" />
					<Input placeholder="confirm password" />
					<Button>CREATE ACCOUNT</Button>
				</Form>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default RegisterPage;
