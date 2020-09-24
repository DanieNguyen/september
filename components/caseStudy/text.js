import styled from 'styled-components';
import { device } from '../device';
import { motion } from 'framer-motion'

export const Title = styled(motion.h1)`
	font-family: DM Serif Display;
	font-style: normal;
	font-weight: normal;
	margin-bottom: 1rem;
	@media ${device.laptop} {
		font-size: 48px;
		line-height: 48px;
		margin-bottom: 0rem;
		width: 85%;
	}
	@media ${device.desktop} {
		font-size: 56px;
		line-height: 56px;
		margin-bottom: 0rem;
		width: 100%;
	}
	font-size: 32px;
	line-height: 32px;
`;

export const Quote = styled.h1`
	font-family: DM Serif Display;
	font-style: italic;
	font-weight: normal;
	margin-bottom: 1rem;
	@media ${device.laptop} {
		font-size: 64px;
		line-height: 64px;
		margin-bottom: 0rem;
	}
	font-size: 32px;
	line-height: 32px;
`;

export const Subtitle = styled.h2`
	font-family: 'Basier-Bold';
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 28px;

	letter-spacing: 0em;
	margin-bottom: 24px;
`;

export const Text = styled.p`
	font-family: 'Basier';
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 24px;

	letter-spacing: -0.03em;
	margin-bottom: 24px;
`;

export const Header = styled(Subtitle)`
	color: ${({ theme }) => theme.colors.text};
`;

export const A = styled.a`
	font-weight bold;
	color: ${({ theme }) => theme.colors.primary};
	cursor: pointer;
`;

export const Break = styled.br`

`;