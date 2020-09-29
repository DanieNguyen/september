import styled from 'styled-components';
import { device } from '../device';
import {
	Title,
	Subtitle,
	Header,
	Text,
	A,
	Strong,
	Break,
} from '../caseStudy/text';
import { Video, Center, Img } from '../caseStudy/container';
import { motion } from 'framer-motion';

const Hook = styled(motion.div)`
	z-index: 2;
	margin-top: 5rem;
	@media ${device.laptop} {
		margin-top: 10vh;
		margin-left: -3.5vw;
		width: 60%;
	}
	@media ${device.desktop} {
		margin-top: 15vh;
		margin-left: -3.5vw;
		width: 70%;
	}
`;

const Summary = styled(motion.div)`
	@media ${device.laptop} {
		margin-left: 9.5vw;
		margin-top: 2rem;
		width: 60%;
	}
	@media ${device.desktop} {
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
	color: #548dfc;
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
						src='static/images/dispatch.png'
						alt='dispatch cover image'></Img>
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
						Assisting police <br /> officers on foot patrol
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
						<SubTitle>Dispatch</SubTitle>
						<Text>
							Today, police are equipped with state of the art
							technology. They can access real-time actionable
							information with their vehicle computers.{' '}
							<strong>
								However, the technology loses its effectiveness
								once the officer is out of their vehicle.
							</strong>
						</Text>
						<Text>
							In a rapid design challenge for the Protothon, I
							designed a mobile app to provide data and assistance
							to police officers patrolling on foot.
						</Text>
					</Summary>
				</Hook>
			</Intro>
			<Overview>
				<Left>
					<Text>
						<Strong>Competition Project</Strong>
						<br /> June 2020 <br /> 2 Days <br /> Team of 2<br />{' '}
						<br /> <Strong>Responsibilities </Strong> <br /> Problem
						Research <br /> Visual Design <br /> Product Design{' '}
						<br /> <br /> <Strong>3rd Place</Strong> <br /> Out of
						20 Teams
					</Text>
				</Left>
				<Right>
					<Header>THE CONTEXT</Header>
					<Text>
						This past June, I participated in the Dubhacks Protothon
						with{' '}
						<A href='https://www.lenatr0n.com' target='_blank'>
							Lena Tran
						</A>
						. We entered the enterprise track to design a mobile app
						to help police officers access information without their
						vehicle computers.
					</Text>
					<Text>
						In just two days, we designed a mobile app and
						presentation deck. We worked collaboratively throughout
						the project from research to product design. I took
						charge for our visual design and created our style guide
						and ypresentation deck.
					</Text>
				</Right>
			</Overview>
			<Break></Break>
			<Center>
				<Right>
					<Header>THE PROBLEM</Header>
					<Text>
						Police officers rely on their vehicle computers to
						access information, communicate with their team, and
						even write up citations. But when they're outside of
						their vehicles, they lose access to all of those
						capabilities.
					</Text>
					<Text>
						In metropolitan areas, police officers are often
						patrolling on foot or bikes without access to a
						computer. This lack of technology puts the officers at
						risk and decreases the effectiveness of their ability to
						keep our communities safe.
					</Text>
				</Right>
			</Center>
		</Div>
	);
}
