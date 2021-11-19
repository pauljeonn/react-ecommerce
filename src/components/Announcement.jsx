import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
	top: 70px;
	width: 100%;
	height: 30px;
	background-color: teal;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
	z-index: 3;
`;

const Announcement = () => {
	return <Container>Super Deal! Get 50% Off Now!</Container>;
};

export default Announcement;
