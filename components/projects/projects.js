import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../device';
import Content from './content';
import Link from 'next/link';

const Container = styled.div`
	width: 100%;
	height: auto;
	margin-top: 80px;
	@media ${device.tablet} {
		margin-top: 900px;
	}
	@media ${device.laptop} {
		margin-top: -300px;
		margin-bottom: 0rem;
	}
	margin-bottom: 4rem;
`;

const Grid = styled.div`
	z-index: 10;
	position: relative;
	display: grid;
	width: 100%;
	@media ${device.tablet} {
		height: 150vh;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-template-rows: repeat(12, minmax(0, 1fr));
		column-gap: 80px;
		row-gap: 80px;
	}
	@media ${device.laptop} {
		height: 190vh;
	}
	@media ${device.laptopL} {
		height: 210vh;
	}
	@media ${device.desktop} {
		height: 150vh;
	}
	@media ${device.desktopL} {
		height: 160vh;
	}
	row-gap: 40px;
`;

const One = styled(motion.a)`
	order: 2;
	@media ${device.tablet} {
		grid-column: 1 / 1;
		grid-row: 1 / 7;
	}
	&:hover {
		cursor: pointer;
	}
`;

const Two = styled(motion.div)`
	order: 1;
	margin-bottom: 0px;
	@media ${device.tablet} {
		order: 2;
		grid-column: 2 / 2;
		grid-row: 1 / 1;
		margin-bottom: 0;
	}
`;

const Three = styled.div`
	order: 4;
	@media ${device.tablet} {
		grid-column: 1 / 1;
		grid-row: 7 / 12;
	}
	&:hover {
		cursor: pointer;
	}
`;

const Four = styled.div`
	order: 3;
	@media ${device.tablet} {
		grid-column: 2 / 2;
		grid-row: 2 / 6;
	}
	&:hover {
		cursor: pointer;
	}
`;

const Five = styled.div`
	order: 5;
	@media ${device.tablet} {
		grid-column: 2 / 2;
		grid-row: 6 / 11;
	}
	&:hover {
		cursor: pointer;
	}
`;

const P = styled.p`
	color: ${({ theme }) => theme.colors.gray};
`;

const H2 = styled.h2`
	font-size: 32px !important;
	line-height: 48px !importanty;
	@media ${device.display} {
		font-size: 48px;
		line-height: 64px;
	} ;
`;

const Box = styled.div`
	padding-top: 0.75rem;
`;

export default function Projects() {
	return (
		<div>
			<Container>
				<Grid>
					<Link href='/spotify'>
						<One initial={{ y: 200, opacity: 0.8 }} animate={{ y: 0, opacity: 1, transition: { delay: 1, duration: 1.2, ease: "easeOut"}}}>
							<Content i={0} video={true} home={true}></Content>
						</One>
					</Link>
					<Two initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1.6, duration: 0.8, ease: "easeOut"}}}>
						<Box>
							<H2>Projects</H2>
							<P>Made with sugar, spice, and everything nice.</P>
						</Box>
					</Two>
					<Three>
						<Content i={2} video={false} home={true}></Content>
					</Three>
					<Four>
						<Content i={1} video={false} home={true}></Content>
					</Four>
					<Five>
						<Content i={3} video={false} home={true}></Content>
					</Five>
				</Grid>
			</Container>
		</div>
	);
}
