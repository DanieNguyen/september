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
				<P>Made with tears and <A href='https://github.com/DanieNguyen/september' target='_blank'>NextJS</A></P>
			</Foot>
		</div>
	);
}
