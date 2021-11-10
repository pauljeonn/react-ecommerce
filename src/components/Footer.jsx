import React from 'react';
import styled from 'styled-components';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';

const Container = styled.div`
	margin-top: 80px;
	padding: 40px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const FooterLine = styled.div`
	width: 80%;
	height: 1px;
	background-color: lightgray;
	display: flex;
	margin-bottom: 20px;
`;

const FooterContainer = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: left;
	padding-top: 5px;
`;

const Logo = styled.div`
	cursor: pointer;
`;

const SocialContainer = styled.div`
	margin-top: 10px;
	display: flex;
`;

const SocialIcon = styled.div`
	margin-right: 10px;
	font-size: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const Right = styled.div`
	flex: 1;
	margin-top: 10px;
`;

const MenuContainer = styled.div`
	display: flex;
	justify-content: right;
`;

const MenuItem = styled.div`
	margin-left: 30px;
	cursor: pointer;
`;

const Footer = () => {
	return (
		<Container>
			<FooterContainer>
				<Left>
					<Logo>
						<h1>CEPEC</h1>
					</Logo>
					<SocialContainer>
						<SocialIcon>
							<FiTwitter />
						</SocialIcon>
						<SocialIcon>
							<FiFacebook />
						</SocialIcon>

						<SocialIcon>
							<FiInstagram />
						</SocialIcon>
					</SocialContainer>
				</Left>
				<Right>
					<MenuContainer>
						<MenuItem>CONTACT</MenuItem>
						<MenuItem>CLIENT SERVICES</MenuItem>
						<MenuItem>LEGAL NOTICES</MenuItem>
						<MenuItem>SOCIAL</MenuItem>
					</MenuContainer>
				</Right>
			</FooterContainer>
		</Container>
	);
};

export default Footer;
