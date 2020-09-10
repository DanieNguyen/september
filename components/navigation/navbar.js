import React from 'react';
import styled from 'styled-components';
import { Hamburger } from './mobileMenu';
import { device } from '../device';
import Link from 'next/link';

const Logo = styled.a`
	position: fixed;
	width: 51px;
	height: 24px;
	left: 24px;
	top: 24px;
	cursor: pointer;
	@media ${device.tablet} {
		left: 64px;
		top: 60px;
	}

	font-family: DM Serif Display;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 24px;

	letter-spacing: -0.03em;
	z-index: 140;
`;

const Right = styled.div`
	display: flex;
	position: absolute;
	justify-content: space-between;
	right: 60px;
	top: 64px;
	margin-right: 32px;
	z-index: 110;
`;

const NavItem = styled.a`
	height: 24px;
	margin-right: 48px;

	font-family: Basier-Medium;
	font-weight: normal;
	font-size: 14px;
	line-height: 24px;

	display: none;
	cursor: pointer;
	@media ${device.laptop} {
		display: block;
	}
	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

const Container = styled.div`
	position: fixed;
	height: 64px;
	left: 0;
	top: 0;
	width: 100vh;
	background-color: white;
	@media ${device.tablet} {
		display: none;
	}
	z-index: 100;
`;

const Zav = styled.div`
	z-index: 100;
`;

export default function Nav() {
	return (
		<Zav>
			<Container></Container>
			<Link href='/' passHref>
				<Logo>dang</Logo>
			</Link>
			<Right>
				<Link href='/' passHref>
					<NavItem>WORKS</NavItem>
				</Link>
				<Link href='/spotify' passHref>
					<NavItem>ABOUT</NavItem>
				</Link>
				<Link href='/' passHref>
					<NavItem>RESUME</NavItem>
				</Link>
				<Link href='/' passHref>
					<NavItem>CONTACT</NavItem>
				</Link>
			</Right>
			<Hamburger></Hamburger>
		</Zav>
	);
}
