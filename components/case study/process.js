import styled from 'styled-components';
import { device } from '../device';
import Line from '../homepage/line';
import { Header, Text } from './text';
import { Img } from './container';

const Behind = styled.div`
	font-family: DM Serif Display;
	font-style: normal;
	font-weight: normal;
	margin-bottom: 0rem;

	@media ${device.laptop} {
		font-size: 96px;
        line-height: 72px;
        margin-bottom: 1rem;
	}

	font-size: 32px;
	line-height: 32px;
	color: #dadada;
`;

const Pixels = styled(Behind)`
    margin-left: 0rem;
    margin-bottom: 2rem;
	@media ${device.laptop} {
		margin-left: 8vw;
        margin-bottom: -4rem;
    }
    @media ${device.desktop} {
		margin-left: 10vw;
	}
`;

const Top = styled.div`
    @media ${device.laptop} {
        margin-top: 4rem;
        margin-bottom: -360px;
    }
`;

const Box = styled.div`
    @media ${device.laptop} {
        margin-left: 8vw;
        margin-top: 8rem;
        width: 40%;
        margin-bottom: 3rem;
    }
    @media ${device.desktop} {
        margin-left: 10vw;
        margin-top: 8rem;
        width: 40%;
        margin-bottom: 3rem;
    }
`;

export default function Process() {
	return (
		<div>
			<Top>
				<Behind>Behind</Behind>
				<Pixels>the Pixels</Pixels>
				<Line height='400' width='60'></Line>
			</Top>
            <Box>
                <Header>RESEARCH</Header>
                <Text>
                    However, due to the reliance on a banner-based structure, the
                    site faced several challenges, including difficulty scaling
                    across devices, and a lack of visual consistency across markets.
                </Text>
            </Box>
            <Img src="static/images/spotify/variety.png"></Img>
            <Box>
                <Header>RESEARCH</Header>
                <Text>
                    However, due to the reliance on a banner-based structure, the
                    site faced several challenges, including difficulty scaling
                    across devices, and a lack of visual consistency across markets.
                </Text>
            </Box>
            <Img src="static/images/spotify/variety.png"></Img>
            <Box>
                <Header>RESEARCH</Header>
                <Text>
                    However, due to the reliance on a banner-based structure, the
                    site faced several challenges, including difficulty scaling
                    across devices, and a lack of visual consistency across markets.
                </Text>
            </Box>
            <Img src="static/images/spotify/variety.png"></Img>
		</div>
	);
}
