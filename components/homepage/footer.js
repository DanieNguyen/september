import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../device';

const Foot = styled.div`
	padding-bottom: 1rem;
`;

const P = styled.p`
	color: ${({ theme }) => theme.colors.gray};
`;

export default function Footer() {
	return (
		<div>
			<Foot>
				<P>Made with tears and NextJS</P>
			</Foot>
		</div>
	);
}
