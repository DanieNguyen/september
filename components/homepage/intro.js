import Line from './line';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../device';

const Title = styled(motion.h1)`
	height: 64px;
	font-family: 'DM Serif Display';
	font-weight: normal;
	font-size: 54px;
	line-height: 54px;
	margin-bottom: 3rem;
	@media ${device.laptop} {
        font-size: 72px;
		line-height: 72px;
		margin-bottom: 0rem;
	}
	@media ${device.desktop} {
        font-size: 96px;
		line-height: 96px;
		letter-spacing: -0.02em;
		margin-bottom: 2rem;
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
	@media ${device.laptop} {
		font-size: 20px !important;
		height: 28px;
		line-height: 28px;
    }
`;

const Definition = styled(motion.p)`
	font-family: 'Basier';
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 24px;
    letter-spacing: -0.06em;
    @media ${device.tablet} {
        margin-left: 2rem;
	}
	@media ${device.laptop} {
		font-size: 20px !important;
		line-height: 28px;

	}
`;

const Box = styled.div`
	margin-top: 70%;
	@media ${device.tablet} {
        margin-top: 50%;
	}
    @media ${device.laptop} {
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

const Statement = styled(motion.div)`
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
        <Line height='1200' width='140'></Line>
		<Box>
			<Title initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.5, duration: 1.2, ease: "easeOut"}}} >Daniel Nguyen</Title>
			<Subtitle initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.7, duration: 1.2, ease: "easeOut"}}}>/ product designer /</Subtitle>
			<Statement initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.8, duration: 1.2, ease: "easeOut"}}}>
				<Number>01</Number>
				<Definition >
					A fresh, creative designer striving to create delightful, <Break/>
					accessible experiences for everyone.
				</Definition>
			</Statement>
            <Statement initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.9, duration: 1.2, ease: "easeOut"}}}>
				<Number>02</Number>
				<Definition>A left-handed, dog-loving, longboarding cool dude.
				</Definition>
			</Statement>
			<Statement initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1.1, duration: 1.2, ease: "easeOut"}}}>
				<Number>03</Number>
				<Definition>A self-taught front-end developer always fixing code on his portfolio
				</Definition>
			</Statement>
		</Box>
        </div>
	);
}
