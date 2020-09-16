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
	color: #FD9EA1;
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
							delay: 0.4,
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
								delay: 0.4,
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
								delay: 0.6,
								duration: 1,
								ease: 'easeOut',
							},
						}}>
						<SubTitle>Vita OS</SubTitle>
						<Text>
							Spotify is the world’s largest audio streaming
							platform right now with millions of songs and
							podcasts.{' '}
							<strong>
								However, listeners have trouble discovering new
								podcasts easily and quickly.
							</strong>
						</Text>
						<Text>
							After an extensive design process of research and
							iteration, I redesigned the Spotify Podcasts home
							page to better highlight podcasts and their
							originality for listeners.
						</Text>
					</Summary>
				</Hook>
			</Intro>
			<Overview>
				<Left>
					<Text>
						<strong>Capstone Project</strong>
						<br /> April - June 2020 <br /> 10 weeks <br /> Team of
						4<br /> <br /> <strong>My Role</strong> <br /> User
						Researcher <br /> Lead Product Designer <br />
					</Text>
				</Left>
				<Right>
					<Header>THE PROBLEM</Header>
					<Text>
						As the leading music streaming platform, Spotify does a
						great job of providing a great listening experience with
						personalized playlists, lyrics, and more. However, with
						podcasts, the Spotify experience isn't quite the same.
					</Text>
					<Text>
						There's a lack of guidance inside the platform to help
						listeners discover and engage in podcasts. As a result,
						listeners struggle to listen to more than a handful of
						podcasts and rely on outside sources to find more
						podcasts.
					</Text>
				</Right>
			</Overview>
		</Div>
	);
}
