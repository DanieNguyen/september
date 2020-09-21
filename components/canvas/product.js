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
			<Img src='static/images/canvas/hero.png'></Img>
			<Center>
				<Box>
					<Header>THE SOLUTION</Header>
					<Text>
						To encourage students to engage in online courses, our
						team designed Study Groups. Study groups is a new
						feature for students to find friends and share resources
						directly inside Canvas. Students can browse or take a
						matchmaking quiz to determine what study group would
						best fit them. In a study group, students can chat,
						call, and post resources for the course.
					</Text>
				</Box>
			</Center>
			<FlexTwo>
				<Half>
					<Card>
						<Img src='static/images/canvas/explore.png'></Img>
						<Caption>
							<Fig>Explore study groups for you</Fig>
							<Text>
								Students can browse and filter through
								descriptive cards highlighting unique study
								groups that they can join.
							</Text>
						</Caption>
					</Card>
					<Card>
						<Img src='static/images/canvas/group.png'></Img>
						<Caption>
							<Fig>Schedule study sessions quickly</Fig>
							<Text>
								The dashboard allows students to easily schedule
								study sessions and see who's able to go.
								Students can also spice up and customize the
								study group for fun by changing animals, group
								colors, and their description.
							</Text>
						</Caption>
					</Card>
					<Card>
						<Video loop muted playsInline autoPlay>
							<source
								src='static/videos/canvas/chat.mp4'
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</Video>
						<Caption>
							<Fig>Communicate with ease</Fig>
							<Text>
								Study groups allow students to communicate
								however they want, whether it’s a text message
								or a digital call. Students are able to see
								who’s online and available so they’ll know who
								to reach out to.
							</Text>
						</Caption>
					</Card>
				</Half>
				<Half>
					<Card>
						<Video loop muted playsInline autoPlay>
							<source
								src='static/videos/canvas/quiz.mp4'
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</Video>
						<Caption>
							<Fig>Or get matched to the perfect one</Fig>
							<Text>
								Students can take the matchmaking quiz to find
								the ideal group that aligns with their schedule,
								study habits, and interests.
							</Text>
						</Caption>
					</Card>
					<Card>
						<Img src='static/images/canvas/announcements.png'></Img>
						<Caption>
							<Fig>Keep what's important visible</Fig>
							<Text>
								Annoucements are a place for students to post
								important information that might get lost in
								chat or voice. Students can share and reference
								resources easily in a secure location.
							</Text>
						</Caption>
					</Card>
					<Card>
						<Img src='static/images/canvas/onboardin.png'></Img>
						<Caption>
							<Fig>Learn from the get go</Fig>
							<Text>
								Since it's a brand new feature, an intuitive and
								fast tutorial helps students discover and enjoy
								their new study group's features.
							</Text>
						</Caption>
					</Card>
				</Half>
			</FlexTwo>
		</div>
	);
}
