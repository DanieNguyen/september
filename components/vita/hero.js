import styled from 'styled-components';
import { device } from '../device';
import { Title, Subtitle, Header, Context, Text } from '../caseStudy/text';
import { Video, Center, Img } from '../caseStudy/container';
import { motion } from 'framer-motion';

const Hook = styled(motion.div)`
	z-index: 2;
	@media ${device.laptop} {
		margin-left: -5vw;
		width: 60%;
	}
	@media ${device.desktop} {
		margin-left: -5vw;
		width: 70%;
	}
`;

const Summary = styled(motion.div)`
	@media ${device.laptop} {
		margin-left: 8vw;
		margin-top: 2rem;
		width: 60%;
	}
`;

const Splash = styled(motion.div)`
	@media ${device.tablet} {
		height: 50vh;
	}
	@media ${device.laptop} {
		margin-left: 8vw;
		width: 80%;
		height: 70vh;
	}
	@media ${device.desktop} {
		margin-left: 0vw;
		width: 80%;
		height: 60vh;
	}
	height: 30vh;
	margin-bottom: 2rem;
	display: flex;
	justify-content: center;
`;

const VideoTwo = styled(Video)`
	width: 80%;
`;

const Intro = styled.div`
	display: flex;
	flex-direction: column;
	@media ${device.laptop} {
		margin-top: 10rem;
		flex-direction: row;
		align-items: center;
	}
	@media ${device.desktop} {
		margin-top: 15rem;
	}
`;

const Div = styled.div`
	margin-top: 12vh;
	@media ${device.laptop} {
		margin-top: 14vh;
	}
	@media ${device.desktop} {
		margin-top: 10vh;
	}
`;

const Left = styled.div`
	margin-top: 2rem;
	margin-bottom: 2rem;
	@media ${device.laptop} {
		width: 21%;
		margin-left: -21%;
		margin-top: 52px;
	}
`;

const Right = styled.div`
	@media ${device.laptop} {
		width: 40%;
	}
`;
const Overview = styled(Center)`
	display: flex;
	flex-direction: column;
	margin-top: 0rem;
	margin-bottom: 4rem;
	@media ${device.laptop} {
		flex-direction: row;
		margin-top: 25vh;
		margin-bottom: 10vh;
	}
`;

const SubTitle = styled(Subtitle)`
	color: #fd9ea1;
`;

export default function Hero() {
	return (
		<Div>
			<Intro>
				<Splash
					initial={{ x: -60, opacity: 0 }}
					animate={{
						x: 0,
						opacity: 1,
						transition: {
							delay: 0.2,
							duration: 1.2,
							ease: 'easeOut',
						},
					}}>
					{/* <VideoTwo loop muted playsInline autoPlay>
						<source
							src='static/videos/canvas/project.mp4'
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</VideoTwo> */}
					<Img src='static/images/vita.png'></Img>
				</Splash>
				<Hook>
					<Title
						initial={{ y: 50, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: {
								delay: 0.2,
								duration: 1.2,
								ease: 'easeOut',
							},
						}}>
						Promoting personal well-being in technology
					</Title>
					<Summary
						initial={{ y: 30, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: {
								delay: 0.4,
								duration: 1,
								ease: 'easeOut',
							},
						}}>
						<SubTitle>Vita OS</SubTitle>
						<Text>
							From young adults hustling with multiple jobs to the
							on-call doctors and nurses, it’s tough to have a
							normal work-life balance in America. The growing
							digital world makes it even harder for people to
							unwind because of{' '}
							<strong>
								the idea that if you have a phone, you’re
								“available.”
							</strong>
						</Text>
						<Text>
							My team and I designed an original concept for a
							mobile OS to encourage healthy living. Vita is an OS
							that helps keep users grounded mentally and inspires
							them to focus on themselves.
						</Text>
					</Summary>
				</Hook>
			</Intro>
			<Overview>
				<Left>
					<Text>
						<strong>Course Project</strong>
						<br /> April - June 2020 <br /> 10 weeks <br /> Team of
						4<br /> <br /> <strong>My Role</strong> <br /> User
						Researcher <br /> Lead Product Designer <br /> <br/> <strong>1st Place</strong> <br/>Perfect Score from <br/> Industry Judges
					</Text>
				</Left>
				<Right>
					<Header>THE PROBLEM</Header>
					<Text>
						In our competitive society, many people hate feeling
						‘unproductive’ and overwork themselves in their careers.
						After work, when all you want to do is look at your
						phone, it’s easy to mindlessly scroll through Instagram
						or Twitter while feeling like you’re wasting time. But
						life isn’t all about work or social media.
					</Text>
					<Text>
						Our goal was to stop the cycle of working and lazing
						around to help people focus on their goals,
						relationships, and happiness. We wanted to promote
						meaningful interactions with technology through an
						original OS, focusing on typical system apps like
						messages and mail.
					</Text>
					<Header>THE APPROACH</Header>
					<Text>
						I worked in a team of seven to complete this project for
						a course, Informatics 365: Mobile App Design. The
						project was to design an original series of 10-15 system
						apps for a mobile OS.
					</Text>
					<Text>
						I served as the lead product designer, working closely with my team to keep our OS consistent. I created our visual design
						language and component library in Figma. I also designed
						all of our presentation decks.
					</Text>
				</Right>
			</Overview>
		</Div>
	);
}
