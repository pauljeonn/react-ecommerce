import React from 'react';
import styled from 'styled-components';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';

const Container = styled.div`
	display: flex;
	margin-top: 40px;
	margin-bottom: 40px; ;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: left;
	margin-left: 45px;
	padding-top: 5px;
`;

const Logo = styled.div`
	cursor: pointer;
`;

const SocialContainer = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: left;
`;

const SocialIcon = styled.div`
	margin-right: 20px;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const Right = styled.div`
	flex: 1;
	margin-top: 10px;
	margin-right: 45px;
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
			<Left>
				<Logo>
					<h1>CEPEC</h1>
				</Logo>
				<SocialContainer>
					<SocialIcon>
						<FiFacebook />
					</SocialIcon>
					<SocialIcon>
						<FiInstagram />
					</SocialIcon>
					<SocialIcon>
						<FiTwitter />
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
		</Container>
	);
};

export default Footer;
