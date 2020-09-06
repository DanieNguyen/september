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
	}
`;

const Grid = styled.div`
	z-index: 10;
	position: relative;
	display: grid;
	height: 150vh;
	width: 100%;
	@media ${device.tablet} {
		height: 200vh;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-template-rows: repeat(12, minmax(0, 1fr));
		column-gap: 80px;
		row-gap: 80px;
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
	margin-bottom: -200px;
	@media ${device.tablet} {
		order: 2;
		grid-column: 2 / 2;
		grid-row: 1 / 1;
		margin-bottom: 0;
	}
`;

const Three = styled.div`
	order: 3;
	@media ${device.tablet} {
		grid-column: 1 / 1;
		grid-row: 7 / 12;
	}
	background-color: red;
	border: 1px solid black;
`;

const Four = styled.div`
	order: 4;
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
	background-color: black;
	border: 1px solid black;
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
						
					</Three>
					<Four><Content i={1} video={false}></Content></Four>
					<Five></Five>
				</Grid>
			</Container>
		</div>
	);
}
