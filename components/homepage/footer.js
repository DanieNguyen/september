import styled from 'styled-components';
import { A } from '../caseStudy/text';

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
				<P>Designed in <A href='https://www.figma.com' target='_blank'>Figma</A> and coded with <A href='https://github.com/DanieNguyen/september' target='_blank'>NextJS</A></P>
			</Foot>
		</div>
	);
}
