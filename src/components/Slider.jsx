import React from 'react';
import styled from 'styled-components';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 90px);
	display: flex;
	background-color: coral;
	position: relative;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	// background-color: ivory;
	// border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === 'left' && '10px'};
	right: ${(props) => props.direction === 'right' && '10px'};
	margin: auto;
	cursor: pointer;
	opacity: 0.7;
	font-size: 20px;
`;

const Wrapper = styled.div`
	height: calc(100% - 90px);
	display: flex;
	align-items: center;
`;

const Slide = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	align-items: center;
`;

const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
	margin-top: 10%;
`;

const Image = styled.img`
	height: 80%;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 80px;
`;
const Desc = styled.p`
	margin: 50px 0;
	font-size: 20px;
`;
const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: white;
	border: 1px solid gray;
	cursor: pointer;
`;

const Slider = () => {
	return (
		<Container>
			<Arrow direction="left">
				<MdArrowBackIos />
			</Arrow>
			<Wrapper>
				<Slide>
					<ImgContainer>
						<Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d4b8b86-ce06-4b19-863c-b3a0d6ebfab1/d8gxi1d-1e73c77d-7682-49c2-b677-60136aa7ea1c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBkNGI4Yjg2LWNlMDYtNGIxOS04NjNjLWIzYTBkNmViZmFiMVwvZDhneGkxZC0xZTczYzc3ZC03NjgyLTQ5YzItYjY3Ny02MDEzNmFhN2VhMWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HEKKtQbvQJtjzzk5vw_ZUcb4eVQvLzD7PD22zoiu3Bo" />
					</ImgContainer>
					<InfoContainer>
						<Title>SUMMER SALE</Title>
						<Desc>GET 50% OFF SALE NOW!</Desc>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>
			<Arrow direction="right">
				<MdArrowForwardIos />
			</Arrow>
		</Container>
	);
};

export default Slider;
