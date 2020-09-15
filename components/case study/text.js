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
	color: #1db954;
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

export const Break = styled.br`

`;