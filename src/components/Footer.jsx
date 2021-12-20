import React from 'react';
import styled from 'styled-components';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoImg } from '../images/lieu-logo.svg';

const Container = styled.div`
	margin-top: 80px;
	padding: 30px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
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
	margin: 10px 20px 0;
	display: flex;
`;

const SocialIcon = styled.div`
	margin-right: 26px;
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

const Copyright = styled.div`
	margin-top: 80px;
	font-size: 14px;
	font-weight: 300;
`;

const Footer = () => {
	return (
		<Container>
			<FooterContainer>
				<Left>
					<Link to="/">
						<Logo>
							<LogoImg style={{ height: '50px' }} />
						</Logo>
					</Link>
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
			{/* <Copyright>© 2021. Paul Jeon. All rights reserved.</Copyright> */}
		</Container>
	);
};

export default Footer;
