import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../device';
import Content from './content';
import Link from 'next/link';
import { FlexTwo, Half } from '../caseStudy/container';

const P = styled.p`
	color: ${({ theme }) => theme.colors.gray};
`;

const H2 = styled.h2`
	font-size: 32px !important;
	line-height: 48px !important;
	@media ${device.laptop} {
		font-size: 42px !important;
		line-height: 64px !important;
	} ;
`;

const Box = styled.div`
`;

const Flex = styled(FlexTwo)`
	display: none;
	@media ${device.laptop} {
		display: flex;
		margin-top: -18rem;
	}
	@media ${device.desktop} {
		display: flex;
		margin-top: -20rem;
	}
`;

const Mobile = styled.div`
	display: flex;
	@media ${device.laptop} {
		display: none;
	}
	flex-direction: column;
	margin-top: 6rem;
`;

const Card = styled(motion.div)`
	margin-bottom: 3rem;
	@media ${device.laptop} {
		margin-bottom: 5rem;
	}
	@media ${device.desktop} {
		margin-bottom: 6rem;
	}
`;

const Title = styled(motion.div)`
	margin-bottom: 1rem;
	@media ${device.laptop} {
		margin-top: 1rem;
		margin-bottom: 3rem;

	}
	@media ${device.desktop} {
		margin-top: 2rem;
		margin-bottom: 4rem;
	}
`;

export default function Projects() {
	return (
		<div>
			<Flex>
				<Half>
					<Link href='/spotify'>
						<Card
							initial={{ y: 200, opacity: 0.8 }}
							animate={{
								y: 0,
								opacity: 1,
								transition: {
									delay: 1,
									duration: 1.2,
									ease: 'easeOut',
								},
							}}>
							<Content i={0} video={true} home={true}></Content>
						</Card>
					</Link>
					<Link href='/vita'>
						<Card
							initial={{ y: 200, opacity: 0.8 }}
							animate={{
								y: 0,
								opacity: 1,
								transition: {
									delay: 1,
									duration: 1.2,
									ease: 'easeOut',
								},
							}}>
							<Content i={2} video={false} home={true}></Content>
						</Card>
					</Link>
				</Half>
				<Half>
					<Title
						initial={{ y: 60, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: {
								delay: 1.6,
								duration: 0.8,
								ease: 'easeOut',
							},
						}}>
						<Box>
							<H2>Projects</H2>
							<P>Made with sugar, spice, and everything nice.</P>
						</Box>
					</Title>
					<Link href='/canvas'>
						<Card
							initial={{ y: 200, opacity: 0.8 }}
							animate={{
								y: 0,
								opacity: 1,
								transition: {
									delay: 1,
									duration: 1.2,
									ease: 'easeOut',
								},
							}}>
							<Content i={1} video={false} home={true}></Content>
						</Card>
					</Link>
					<Link href='/dispatch'>
						<Card
							initial={{ y: 200, opacity: 0.8 }}
							animate={{
								y: 0,
								opacity: 1,
								transition: {
									delay: 1,
									duration: 1.2,
									ease: 'easeOut',
								},
							}}>
							<Content i={3} video={false} home={true}></Content>
						</Card>
					</Link>
				</Half>
			</Flex>

			<Mobile>
				<Card
					initial={{ y: 60, opacity: 0 }}
					animate={{
						y: 0,
						opacity: 1,
						transition: {
							delay: 1.6,
							duration: 0.8,
							ease: 'easeOut',
						},
					}}>
					<Box>
						<H2>Projects</H2>
						<P>Made with sugar, spice, and everything nice.</P>
					</Box>
				</Card>
				<Link href='/spotify'>
					<Card
						initial={{ y: 200, opacity: 0.8 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: {
								delay: 1,
								duration: 1.2,
								ease: 'easeOut',
							},
						}}>
						<Content i={0} video={true} home={true}></Content>
					</Card>
				</Link>
				<Link href='/canvas'>
					<Card
						initial={{ y: 200, opacity: 0.8 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: {
								delay: 1,
								duration: 1.2,
								ease: 'easeOut',
							},
						}}>
						<Content i={1} video={false} home={true}></Content>
					</Card>
				</Link>
				<Link href='/canvas'>
					<Card
						initial={{ y: 200, opacity: 0.8 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: {
								delay: 1,
								duration: 1.2,
								ease: 'easeOut',
							},
						}}>
						<Content i={2} video={false} home={true}></Content>
					</Card>
				</Link>
				<Link href='/canvas'>
					<Card
						initial={{ y: 200, opacity: 0.8 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: {
								delay: 1,
								duration: 1.2,
								ease: 'easeOut',
							},
						}}>
						<Content i={3} video={false} home={true}></Content>
					</Card>
				</Link>
			</Mobile>
		</div>
	);
}
