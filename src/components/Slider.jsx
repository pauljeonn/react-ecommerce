import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import { sliderItems } from '../data';
import { Link } from 'react-router-dom';

const Container = styled.div`
	margin-top: 100px;
	width: 100%;
	height: 70vh;
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
	// direction props에 따라서 위치 설정
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
	background-color: #${(props) => props.bg}; // slide 배경색 props로 전달
`;

const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

const Image = styled.img`
	height: 90%;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding-right: 3%;
`;

const Title = styled.h1`
	font-size: 75px;
`;
const Desc = styled.p`
	margin: 50px 0;
	font-size: 20px;
`;
const Button = styled.button`
	width: 180px;
	height: 50px;
	padding: 10px;
	font-size: 20px;
	background-color: black;
	color: white;
	border: 2px solid black;

	cursor: pointer;

	&:hover {
		background-color: transparent;
		border: 2px solid black;
		color: black;
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
					<Slide key={item.id} bg={item.bg}>
						<ImgContainer>
							<Image src={item.img} />
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Link to="/products">
								<Button>SHOP NOW</Button>
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
