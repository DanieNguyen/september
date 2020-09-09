import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../device';


const LineReal = styled(motion.path)`

	stroke: ${({ theme }) => theme.colors.lightgray};
	stroke-width: 2;
`;

const Container = styled.div`
	display: none;
	@media ${device.laptop} {
		display: inline;
	}
	z-index: -10000;
`;

export default function Line({height, width}) {
	const d = [`M ${width} 0 L ${width} ${height}`];
    return (
        <Container>
            <svg height={height} width={width}>
				console.log(d);
				<LineReal
					initial={{ pathLength: 0, pathOffset: 0 }}
					animate={{ pathLength: 1, pathOffset: 0 }}
					transition={{ duration: 2.5 }}
					d={d}
				/>
			</svg>
        </Container>
    )
}
