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
		font-size: 96px;
		line-height: 72px;
		margin-bottom: 1rem;
	}

	font-size: 32px;
	line-height: 32px;
	color: #dadada;
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
			<Img src='static/images/vita/featured.png' alt="Vita final solution"></Img>
			<Center>
				<Box>
					<Header>THE SOLUTION</Header>
					<Text>
						Introducing Vita OS, designed for intentional living.
						Vita is humanistic and human-made. It’s meant to
						encourage users to reflect on their life in all aspects
						from work, relationships, goals, and most importantly
						happiness. The core concepts of Vita are education and
						inspiration, hoping to inform and motivate users to
						change their lives for the better.
					</Text>
				</Box>
			</Center>
			<FlexTwo>
				<Half>
					<Card>
						<Img src='static/images/vita/home.png' alt="Vita Home screens"></Img>
						<Caption>
							<Fig>Home is what you make it</Fig>
							<Text>
								Users can customize their home with two layouts: grid and list. They can also
								create behaviors such as muting and scheduling
								apps to launch.
							</Text>
						</Caption>
					</Card>
					<Card>
						<Img src='static/images/vita/messages.png' alt="Vita messaging screens"></Img>
						<Caption>
							<Fig>Messages keep you in touch</Fig>
							<Text>
								Vita’s message app is smart, allowing users to
								organize chats by group. Users are reminded to
								stay in touch with their relationships in the
								follow up section.
							</Text>
						</Caption>
					</Card>
					<Card>
						<Img src='static/images/vita/tasks.png' alt="Vita task screens"></Img>
						<Caption>
							<Fig>Tasks are attainable</Fig>
							<Text>
								Users can keep track of tasks and goals they
								have for the future. Both are organized and
								encourage users through reminders and
								percentages.
							</Text>
						</Caption>
					</Card>
					<Card>
						<Img src='static/images/vita/notes.png' alt="Vita notes screens"></Img>
						<Caption>
							<Fig>Notes creatively express your thoughts</Fig>
							<Text>
								Expressing yourself is essential to maintaining
								your mental health. Notes is a place for users
								to type, draw, and show their thoughts and
								feelings.
							</Text>
						</Caption>
					</Card>
				</Half>
				<Half>
					<Card>
						<Img src='static/images/vita/control.png' alt="Vita control screens"></Img>
						<Caption>
							<Fig>Control what’s important to you</Fig>
							<Text>
								Swipe down to see the control panel where users
								can choose what tools they need and filter the
								notifications by apps they want to see.
							</Text>
						</Caption>
					</Card>
					<Card>
						<Img src='static/images/vita/wallet.png' alt="Vita wallet screens"></Img>
						<Caption>
							<Fig>Wallet keeps you accountable</Fig>
							<Text>
								Users can learn how to grow their personal
								finances with the smart Wallet app. Wallet
								analyzes spending and provides resources to help
								users maintain a budget.
							</Text>
						</Caption>
					</Card>
					<Card>
						<Img src='static/images/vita/health.png' alt="Vita health screens"></Img>
						<Caption>
							<Fig>Health empowers you</Fig>
							<Text>
								Taking care of your body is something everyone
								should do. The health app considers both mental
								and physical wellbeing through tracking steps,
								activity, and moods.
							</Text>
						</Caption>
					</Card>
					<Card>
						<Img src='static/images/vita/calendar.png' alt="Vita calendar screens"></Img>
						<Caption>
							<Fig>Calendar is on your time</Fig>
							<Text>
								A simple calendar with multiple views helps
								users track their short-term activities and
								long-term goals.
							</Text>
						</Caption>
					</Card>
				</Half>
			</FlexTwo>
		</div>
	);
}
