import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../device';
import Content from './content';

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
    @media ${device.desktop} {
        height: 160vh;
    }
    row-gap: 40px;
`;

const One = styled.div`
	order: 2;
	@media ${device.tablet} {
		grid-column: 1 / 1;
		grid-row: 1 / 7;
	}
`;

const Two = styled.div`
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
`;

const Four = styled.div`
	order: 3;
	@media ${device.tablet} {
		grid-column: 2 / 2;
		grid-row: 2 / 6;
	}
`;

const Five = styled.div`
	order: 5;
	@media ${device.tablet} {
		grid-column: 2 / 2;
		grid-row: 6 / 11;
	}
`;

const P = styled.p`
	color: ${({ theme }) => theme.colors.gray};
`;

const Box = styled.div`
	padding-top: 2rem;
`;

export default function Projects() {
	return (
		<div>
			<Container>
				<Grid>
					<One>
						<Content i={0} video={true}></Content>
					</One>
					<Two>
						<Box>
							<h2>Projects</h2>
							<P>Made with sugar, spice, and everything nice.</P>
						</Box>
					</Two>
					<Three>
						<Content i={2} video={false}></Content>
					</Three>
					<Four>
						<Content i={1} video={false}></Content>
					</Four>
					<Five>
						<Content i={3} video={false}></Content>
					</Five>
				</Grid>
			</Container>
		</div>
	);
}
