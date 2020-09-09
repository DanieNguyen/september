import Line from './line';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../device';

const Title = styled(motion.h1)`
	height: 64px;
	font-family: 'DM Serif Display';
	font-weight: normal;
	font-size: 64px;
	line-height: 64px;
    margin-bottom: 8px;
    @media ${device.tablet} {
    }
`;

const Subtitle = styled(motion.h2)`
	font-family: 'Basier';
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	letter-spacing: -0.06em;
	margin-bottom: 2rem;
	color: ${({ theme }) => theme.colors.primary};
`;

const Number = styled(motion.p)`
	width: 18px;
	height: 18px;

	font-family: 'Basier';
	font-weight: normal;

	font-size: 1rem;
	letter-spacing: -0.06em;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.gray};
    @media ${device.tablet} {
        width: 32px;
    }
`;

const Definition = styled(motion.p)`
	font-family: 'Basier';
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	line-height: 24px;
	/* or 133% */

    letter-spacing: -0.06em;
    @media ${device.tablet} {
        margin-left: 2rem;
    }
`;

const Box = styled.div`
	margin-top: 70%;
    @media ${device.tablet} {
        position: absolute;
        left: 20%;
        top: 40%;
        margin: 0;
	}
	@media ${device.desktop} {
        position: absolute;
        left: 30%;
        top: 40%;
        margin: 0;
    }
	z-index: -100;
`;

const Statement = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    @media ${device.tablet} {
        flex-direction: row;
        align-items: baseline;
    }
`;

const Break = styled.br`
	display: none;
	@media ${device.tablet} {
		display: inline;
	}
`;

export default function Intro() {
	return (
        <div>
        <Line></Line>
		<Box>
			<Title>Daniel</Title>
			<Subtitle>[product designer]</Subtitle>
			<Statement>
				<Number>01</Number>
				<Definition>
					A fresh junior designer striving to create delightful, <Break/>
					accessible experiences for everyone.
				</Definition>
			</Statement>
            <Statement>
				<Number>02</Number>
				<Definition>A left-handed, dog-loving, longboarding cool dude.
				</Definition>
			</Statement>
		</Box>
        </div>
	);
}
