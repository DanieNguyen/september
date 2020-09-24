import styled from 'styled-components';
import { device } from '../device';
import { Title, Subtitle, Header, Text } from '../caseStudy/text';
import { Video, Center } from '../caseStudy/container';
import { motion } from 'framer-motion';

const Hook = styled(motion.div)`
	z-index: 2;
	margin-top: 5rem;
	@media ${device.laptop} {
		margin-top: 10vh;
		margin-left: -5vw;
		width: 60%;
	}
	@media ${device.desktop} {
		margin-top: 15vh;
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
	@media ${device.laptop} {
		margin-left: 8vw;
		width: 55%;
	}
	@media ${device.desktop} {
		margin-left: 0vw;
		width: 80%;
	}
`;

const Intro = styled.div`
	display: flex;
	flex-direction: column;
	@media ${device.laptop} {
		flex-direction: row;
		align-items: center;
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
	color: #19ba53;
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
					<Video loop muted playsInline autoPlay>
						<source
							src='static/videos/spotify/project.mp4'
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</Video>
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
						Helping listeners discover new podcasts
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
						<SubTitle>Featured Podcasts</SubTitle>
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
						<strong>Individual Project</strong>
						<br /> July - Aug 2020 <br /> 8 weeks <br /> 
						<br /> <strong>Responsibilities </strong> <br /> User
						Research <br /> Visual Design <br /> Product Design <br/> <br/> <strong>Recognized for Best</strong> <br/>UX, Visual Design, <br/> and Presentation
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
