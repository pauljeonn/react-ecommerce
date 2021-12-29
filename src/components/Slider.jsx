import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import { sliderItems } from '../data';
import { Link } from 'react-router-dom';

const Container = styled.div`
	margin-top: 70px;
	width: 100%;
	height: 685px;
	display: flex;
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
	left: 50%;
	// direction props에 따라서 위치 설정
	transform: ${(props) =>
		props.direction === 'left'
			? 'translate(-580px, 0)'
			: 'translate(530px, 0)'};
	margin: auto;
	cursor: pointer;
	opacity: 0.7;
	font-size: 28px;
	z-index: 2;

	&:hover {
		color: gray;
	}
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 1.5s ease; // slider animation
	transform: translateX(
		${(props) => props.slideIndex * -100}vw
	); // slideIndex * -100vw만큼 이동
`;

const Slide = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	max-width: 1200px;
	height: 100%;
	position: absolute;
	top: 0;
`;

const InfoContainer = styled.div`
	z-index: 2;
	text-align: center;
`;

const Title = styled.h1`
	font-size: 40px;
	color: ${(props) => (props.id === 3 ? 'white' : 'black')};
`;

const Desc = styled.p`
	margin: 20px 0;
	font-size: 20px;
	color: ${(props) => (props.id === 3 ? 'white' : 'black')};
`;

const Button = styled.button`
	width: 180px;
	height: 45px;
	padding: 5px;
	font-size: 20px;
	background-color: ${(props) => (props.id === 3 ? 'white' : 'black')};
	color: ${(props) => (props.id === 3 ? 'black' : 'white')};
	border: 2px solid black;
	cursor: pointer;
	&:hover {
		background-color: transparent;
		border: ${(props) =>
			props.id === 3 ? '2px solid white' : '2px solid black'};
		color: ${(props) => (props.id === 3 ? 'white' : 'black')};
	}
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = (direction) => {
		if (direction === 'left') {
			// left 버튼 클릭 시 현재 slideIndex가 0이면 set to 마지막 아이템 인덱스
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
		} else {
			// right 버튼 클릭 시 현재 slideIndex가 마지막이면 set to 0
			setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
		}
	};

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick('left')}>
				<MdArrowBackIos />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide key={item.id}>
						<Image src={item.img} />
						<InfoContainer>
							<Title id={item.id}>{item.title}</Title>
							<Desc id={item.id}>{item.desc}</Desc>
							<Link to="/products">
								<Button id={item.id}>SHOP NOW</Button>
							</Link>
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
