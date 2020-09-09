import styled from 'styled-components';
import { device } from '../device';

export const Title = styled.h1`
	font-family: DM Serif Display;
	font-style: normal;
	font-weight: normal;
	margin-bottom: 1rem;
	@media ${device.laptop} {
		font-size: 72px;
		line-height: 72px;
		margin-bottom: 0rem;
	}
	font-size: 32px;
	line-height: 32px;
`;

export const Subtitle = styled.h2`
	font-family: 'Basier-Medium';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 24px;

	letter-spacing: -0.06em;
	margin-bottom: 1.5rem;
	color: #1db954;
`;

export const Text = styled.p`
	font-family: 'Basier';
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 24px;

	letter-spacing: -0.06em;
	margin-bottom: 1.5rem;
`;

export const Header = styled(Subtitle)`
	color: ${({ theme }) => theme.colors.text};
	margin-left: 0vw;
	width: 100%;
	margin-top: 0rem;
	margin-bottom: 1.5rem;
`;

export const Context = styled(Text)`
	display: none;
	@media ${device.laptop} {
		color: ${({ theme }) => theme.colors.gray};
		margin-left: 8vw;
		margin-top: 3rem;
		width: 30%;
		display: block;
	}
	@media ${device.desktop} {
		color: ${({ theme }) => theme.colors.gray};
		margin-left: 0vw;
		margin-top: 3rem;
		width: 20%;
		display: block;
	}
`;