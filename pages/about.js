import Head from 'next/head';
import Nav from '../components/navigation/navbar';
import Layout from '../components/layout';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../components/device';
import { Header, Text, Strong } from '../components/caseStudy/text';
import { Img, FlexTwo, Half, Center } from '../components/caseStudy/container';

const Box = styled(motion.div)`
	margin-bottom: 6rem;
	@media ${device.laptop} {
		width: 30%;
		margin-left: 8rem;
	}
	@media ${device.desktop} {
		width: 35%;
		margin-left: 0rem;
	}
`;

const Title = styled.h1`
	font-family: 'DM Serif Display';
	font-weight: normal;
	font-size: 32px;
	line-height: 32px;
	margin-bottom: 1rem;
	@media ${device.laptop} {
		font-size: 48px;
		line-height: 48px;
	}
	@media ${device.laptop} {
		letter-spacing: -0.03em;
		margin-bottom: 2rem;
	}
`;

const Flex = styled(FlexTwo)`
	align-items: flex-start;
	margin-top: 10rem;
	@media ${device.laptop} {
		margin-top: 15rem;
	}
	@media ${device.desktop} {
		margin-top: 15rem;
	}
`;

const Caption = styled.p`
	text-align: center;
	font-style: italic;
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.text};
`;

const UL = styled.ul`
	padding-left: 2rem;
`;

const Li = styled.li`
	font-family: 'Basier';
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 24px;

	letter-spacing: -0.03em;
	margin-bottom: 0.5rem;
	padding-left: 1rem;
`;

const Move = styled(motion.div)`y
`;

const Heade = styled(Header)`
	margin-top: 2rem;
	margin-bottom: 1rem;
`;

const StickyBox = styled(Half)`
	@media ${device.laptop} {
		position: -webkit-sticky; /* for Safari */
		position: sticky;
		top: 0;
		align-self: flex-start; /* <-- this is the fix */
		margin-top: -15rem;
		padding-top: 15rem;
	}
`;

export default function Home() {
	return (
		<div>
			<Head>
				<title>About Me</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
			<Nav></Nav>
			<Layout>
				<Flex>
					<Box
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								delay: 0.6,
								duration: 0.8,
								ease: 'easeOut',
							},
						}}>
						<Title>Hey, I'm Daniel</Title>
						<Text>
							I'm a Seattle-based product designer hoping to solve
							problems and improve lives through technology.
						</Text>
						<Text>
							I just graduated from the University of Washington
							with a B.S. in Human Centered Design and
							Engineering.
						</Text>
						<Text>
							My most recent experiences are working on Spotify
							Podcasts for the Applied 2020 program and interning
							at Garmin on the Automotive UX OEM team in summer
							2019.{' '}
							<Strong>
								I'm currently looking for full time
								opportunities and internships!
							</Strong>
						</Text>
						<br />
						<Heade>Why Product Design?</Heade>
						<Text>
							In college, my family fell apart because of a
							gambling addiction (oof, rough intro).
						</Text>
						<Text>
							After I learned about how casinos and slow machines
							are designed to be addictive in an HCI course, I
							knew that I wanted to be a product designer.
						</Text>
						<Text>
							My goal as a designer is to{' '}
							<Strong>
								prevent dark UX patterns like casinos and create
								meaningful experiences for everyone.
							</Strong>
						</Text>
						<br />
						<Heade>Things I Do</Heade>
						<UL>
							<Li>Design and code this portfolio at night</Li>
							<Li>Playing Valorant when I can't figure out my code</Li>
							<Li>Eat dessert after every meal</Li>
							<Li>
								Reading about systematic racism because{' '}
								<Strong>Black Lives Matter.</Strong>
							</Li>
						</UL>
						<Heade>Things I Like</Heade>
						<UL>
							<Li>dogs, dogs, dogs</Li>
							<Li>food and boba</Li>
							<Li>hot weather (take me out of Seattle)</Li>
						</UL>
						<Heade>Fonts I Dream About Owning</Heade>
						<UL>
							<Li>Tiempos Headline</Li>
							<Li>Circular</Li>
							<Li>Noe Display</Li>
							<Li>Calibre</Li>
							<Li>Sohne</Li>
						</UL>
						<br />
					</Box>
					<StickyBox>
						<Move
							initial={{ y: 40, opacity: 0 }}
							animate={{
								y: 0,
								opacity: 1,
								transition: {
									delay: 0.6,
									duration: 0.8,
									ease: 'easeOut',
								},
							}}>
							<Img
								src='static/images/about.jpg'
								alt='image of me and my friends'></Img>
							<Caption>
								I'm in the sweatpants chillin' with no makeup on
							</Caption>
						</Move>
					</StickyBox>
				</Flex>
			</Layout>
		</div>
	);
}
