import styled from 'styled-components';
import { device } from '../device';
import {
	Title,
	Subtitle,
	Header,
	Context,
	Text,
	Strong,
	Break,
} from '../caseStudy/text';
import { Video, Center, Img } from '../caseStudy/container';
import { motion } from 'framer-motion';

const Hook = styled(motion.div)`
	z-index: 2;
	@media ${device.laptop} {
		margin-left: -2.5vw;
		width: 65%;
	}
	@media ${device.desktop} {
		margin-left: -2vw;
		width: 70%;
	}
`;

const Summary = styled(motion.div)`
	@media ${device.laptop} {
		margin-left: 7vw;
		margin-top: 2rem;
		width: 60%;
	}
	@media ${device.desktop} {
		margin-left: 6vw;
		margin-top: 2rem;
		width: 60%;
	}
`;

const Splash = styled(motion.div)`
	@media ${device.tablet} {
		height: 50vh;
	}
	@media ${device.laptop} {
		margin-left: 7vw;
		width: 70%;
		margin-bottom: 6rem;
	}
	@media ${device.desktop} {
		margin-left: 0vw;
		width: 80%;
	}
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
	color: #4b2e83;
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
					<Img
						src='static/images/canvas.png'
						alt='Canvas Cover Image'></Img>
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
						Empowering student communities in online courses
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
						<SubTitle>Study Groups</SubTitle>
						<Text>
							As Covid-19 continues to impact the United States,
							many schools have turned to online learning.{' '}
							<strong>
								Students all over the country have expressed a
								lack of motivation and engagement during
								classes.
							</strong>
						</Text>
						<Text>
							Through a detailed research and design process, my
							team and I designed a new feature for UW Canvas to
							encourage online student communities for learning.
						</Text>
					</Summary>
				</Hook>
			</Intro>
			<Overview>
				<Left>
					<Text>
						<Strong>Capstone Project</Strong>
						<br /> April - June 2020 <br /> 10 weeks <br /> Team of
						4<br /> <br /> <Strong>My Role</Strong> <br /> User
						Researcher <br /> Lead Product Designer <br />
					</Text>
				</Left>
				<Right>
					<Header>THE CONTEXT</Header>
					<Text>
						For my senior capstone project, my team partnered with
						UW Continuum College to improve UW Canvas for online
						learning. Our goals were to understand and improve how
						students learn in online classes.
					</Text>
					<Text>
						I contributed as the lead product designer. I designed
						the visual design system and high-fidelity, interactive
						prototype. I also designed and moderated the majority of
						our user interviews and usability testing sessions.
					</Text>
				</Right>
			</Overview>
			<Break></Break>
			<Center>
				<Right>
					<Header>THE PROBLEM</Header>
					<Text>
						Learning online has its benefits in that students can
						work at their own pace and in their own environment.
						However, there are a lot of issues with connectivity,
						collaboration, and especially motivation.
					</Text>
					<Text>
						Students have a hard time adjusting to online learning
						because of its isolated nature and lack of interaction.
						Our team sought to address this problem by introducing a
						Canvas feature for collaboration and bonding.
					</Text>
				</Right>
			</Center>
		</Div>
	);
}
