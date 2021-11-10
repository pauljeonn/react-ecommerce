import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
`;

const ImgContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: lightgray;
	opacity: 0.5;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const Wrapper = styled.div`
	width: 40%;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 2;
	position: absolute;
	top: 50%;
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
	height: 25px;
	margin-bottom: 10px;
`;

const Button = styled.button`
	margin-top: 20px;
	height: 35px;
	background-color: teal;
	color: white;
	font-weight: 300;
	border: none;
	cursor: pointer;
`;

const RegisterPage = () => {
	return (
		<Container>
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
		</Container>
	);
};

export default RegisterPage;
