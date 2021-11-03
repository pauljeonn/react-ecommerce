import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import { sliderItems } from '../data';

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 90px);
	display: flex;
	background-color: #ffd0c6;
	position: relative;
	overflow-x: hidden;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
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
	z-index: 2;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`;

const Slide = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

const Image = styled.img`
	height: 100%;
`;

const InfoContainer = styled.div`
	flex: 1;
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
	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = (direction) => {};

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick('left')}>
				<MdArrowBackIos />
			</Arrow>
			<Wrapper>
				{sliderItems.map((item) => (
					<Slide bg={item.bg}>
						<ImgContainer>
							<Image src={item.img} />
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button>SHOP NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick('right')}>
				<MdArrowForwardIos />
			</Arrow>
		</Container>
	);
};

export default Slider;
