import React from 'react';
import styled from 'styled-components';
import Cloth from '../images/cloth-1.png';
import Cloth2 from '../images/cloth-2.png';

const Container = styled.div`
	width: 100%;
	height: 1300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Wrapper1 = styled.div`
	width: 90%;
	max-width: 1400px;
	height: 650px;
	background-color: black;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
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
	width: 60%;
	max-width: 750px;
	height: 400px;
`;

const Wrapper2 = styled.div`
	width: 90%;
	max-width: 1400px;
	height: 650px;
	background-color: #eff2e4;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Img2 = styled.img`
	width: 60%;
	max-width: 750px;
	height: 400px;
`;

const Title2 = styled.div`
	margin-top: 50px;
	font-size: 30px;
	font-weight: 500;
	color: black;
`;
const Desc2 = styled.div`
	margin-top: 15px;
	width: 550px;
	font-weight: 200;
	color: black;
`;

const About = () => {
	return (
		<Container>
			<Wrapper1>
				<Title>오래 사용하는 제품은 좋은 재질을 사용합니다.</Title>
				<Desc>
					지속가능한 것들은 최상의 디자인으로 최고급 원단부터 튼튼한 부자재까지
					조심스레 제작됩니다. 장인정신을 의류시장에 다시 일깨운다는 의식으로
					정성스러운 제작 프로세스를 제품의 퀄리티로 느껴보세요.
				</Desc>
				<Img src={Cloth} />
			</Wrapper1>
			<Wrapper2>
				<Img2 src={Cloth2} />
				<Title2>자원을 소중하게, 자연을 소중하게.</Title2>
				<Desc2>
					지금까지의 의류시장은 너무나도 빠른 소비와 회전률로 진행되어 왔습니다.
					LIEU는 의류시장에 새로운 의식을 가져오려고 노력하고 있습니다.
					어떻게하면 더 지속 가능한 의류 사용을 실천할 수 있을지 꾸준히
					고민합니다.
				</Desc2>
			</Wrapper2>
		</Container>
	);
};

export default About;
