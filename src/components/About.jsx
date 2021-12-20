import React from 'react';
import styled from 'styled-components';
import Cloth from '../images/cloth-1.png';

const Container = styled.div`
	width: 100%;
	height: 600px;
	display: flex;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 90%;
	max-width: 1200px;
	background-color: black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.div`
	font-size: 30px;
	color: white;
`;
const Desc = styled.div`
	margin-top: 15px;
	width: 550px;
	font-weight: 200;
	color: white;
`;

const Img = styled.img`
	margin-top: 50px;
	width: 50%;
	max-width: 650px;
	height: 300px;
`;

const About = () => {
	return (
		<Container>
			<Wrapper>
				<Title>오래 사용하는 제품은 좋은 재질을 사용합니다.</Title>
				<Desc>
					지속가능한 것들은 최상의 디자인으로 최고급 원단부터 튼튼한 부자재까지
					조심스레 제작됩니다. 장인정신을 의류시장에 다시 일깨운다는 의식으로
					정성스러운 제작 프로세스를 제품의 퀄리티로 느껴보세요.
				</Desc>
				<Img src={Cloth} />
			</Wrapper>
		</Container>
	);
};

export default About;
