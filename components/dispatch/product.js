import styled from 'styled-components';
import { device } from '../device';
import { Header, Text } from '../caseStudy/text';
import { Video, Img, FlexTwo, Half, Center } from '../caseStudy/container';
import Line from '../homepage/line';

const Box = styled.div`
	@media ${device.laptop} {
		width: 40%;
	}
`;

const Final = styled.div`
	font-family: DM Serif Display;
	font-style: normal;
	font-weight: normal;
	margin-bottom: 0rem;
	text-align: right;

	@media ${device.laptop} {
		font-size: 72px;
		line-height: 64px;
		margin-bottom: 1rem;
	}

	font-size: 32px;
	line-height: 32px;
	color: #dadada;
`;

const Solution = styled(Final)`
	margin-left: 0rem;
	margin-bottom: 2rem;
`;

const Top = styled.div`
	@media ${device.laptop} {
		margin-top: 2rem;
		margin-bottom: 0px;
	}
`;

const Caption = styled.div`
	@media ${device.laptop} {
		width: 70%;
	}
	margin-top: 1rem;
`;

const Fig = styled.h3`
	margin-bottom: 0.5rem;
	font-family: 'Basier-Bold';
	font-size: 20px;
	line-height: 28px;
`;

const Card = styled.div`
	margin-bottom: 3rem;
	@media ${device.laptop} {
		margin-bottom: 6rem;
	}
`;

export default function Product() {
	return (
		<div>
			<Top>
				<Final>The</Final>
				<Solution>Solution</Solution>
			</Top>
			<Img src='static/images/dispatch/featured.png'></Img>
			<Center>
				<Box>
					<Header>THE SOLUTION</Header>
					<Text>
						Dispatch is a mobile app meant to provide real-time data
						for police officers on the go. Police officers will be
						able to see and respond to nearby incidents, call for
						backup, and issue citations. Dispatch is also tailored
						towards an individual police officer, allowing them to
						keep track of their own records.
					</Text>
				</Box>
			</Center>
			<FlexTwo>
				<Half>
					<Card>
						<Img src='static/images/dispatch/dash.png'></Img>
						<Caption>
							<Fig>Understand the neighborhood at a glance</Fig>
							<Text>
								Officers can quickly browse through incidents in
								their patrol area by location, type, and
								priority in their dashboard.
							</Text>
						</Caption>
					</Card>
					<Card>
						<Img src='static/images/dispatch/citation.png'></Img>
						<Caption>
							<Fig>Fill out citations in a minute</Fig>
							<Text>
								For minor incidents, officers can quickly scan a
								drivers’ license and fill out a citation
								immediately in the app.
							</Text>
						</Caption>
					</Card>
				</Half>
				<Half>
					<Card>
						<Img src='static/images/dispatch/map.png'></Img>
						<Caption>
							<Fig>Find the best route</Fig>
							<Text>
								On foot, it can be difficult to understand where
								an incident is. The map routes officers to the
								best route for a speedy response to any
								incident.
							</Text>
						</Caption>
					</Card>
					<Card>
						<Img src='static/images/dispatch/backup.png'></Img>
						<Caption>
							<Fig>Call for backup immediately</Fig>
							<Text>
								Calling for backup is a case where it’s better
								to be safe than sorry. Dispatch provides a clear
								method with large red buttons.
							</Text>
						</Caption>
					</Card>
				</Half>
			</FlexTwo>
		</div>
	);
}
