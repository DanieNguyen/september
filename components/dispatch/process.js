import styled from 'styled-components';
import { device } from '../device';
import Line from '../homepage/line';
import { Header, Text } from '../caseStudy/text';
import { Img, FlexTwo, Half, Center } from '../caseStudy/container';

const Behind = styled.div`
	font-family: DM Serif Display;
	font-style: normal;
	font-weight: normal;
	margin-bottom: 0rem;

	@media ${device.laptop} {
		font-size: 72px;
		line-height: 64px;
		margin-bottom: 1rem;
	}

	font-size: 32px;
	line-height: 32px;
	color: #dadada;
`;

const Pixels = styled(Behind)`
	margin-left: 0rem;
	margin-bottom: 2rem;
`;

const Top = styled.div`
	@media ${device.laptop} {
		margin-top: 12rem;
		margin-bottom: 6rem;
	}
`;

const Box = styled.div`
	@media ${device.laptop} {
		padding-top: 10rem;
		width: 28%;
		margin-left: 8rem;
	}
	@media ${device.desktop} {
		margin-left: 0;
		padding-top: 8rem;
		width: 30%;
	}
`;

const StickyBox = styled(Box)`
	@media ${device.laptop} {
		position: -webkit-sticky; /* for Safari */
		position: sticky;
		top: 0;
		align-self: flex-start; /* <-- this is the fix */
		margin-bottom: 4rem;
	}
`;

const HalfSticky = styled(Half)`
	@media ${device.laptop} {
		padding-top: 10rem;
		width: 58%;
		Img {
			margin-bottom: 4rem;
		}
	}
	@media ${device.desktop} {
		margin-left: 0;
		padding-top: 8rem;
		width: 65%;
		Img {
			margin-bottom: 2rem;
		}
	}
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
	margin-bottom: 1rem;
	padding-left: 1rem;
`;

const Caption = styled.p`
	text-align: center;
	font-size: 1rem;
	@media ${device.laptop} {
		margin-top: -2rem;
		margin-bottom: 4rem;
	}
	@media ${device.desktop} {
		margin-top: 0rem;
		margin-bottom: 4rem;
	}
	color: ${({ theme }) => theme.colors.gray};
`;

const CaptionTwo = styled(Caption)`
	@media ${device.laptop} {
		margin-top: -3rem;
	}
	@media ${device.desktop} {
		margin-top: -2rem;
	}
`;

const Subheader = styled.h3`
	font-family: 'Basier-Medium';
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 24px;

	letter-spacing: 0em;
	margin-bottom: 12px;
	color: ${({ theme }) => theme.colors.text};
`;

const Div = styled.div`
	@media ${device.laptop} {
		width: 50%;
		margin-left: 8rem;
	}
	@media ${device.desktop} {
		margin-left: 0;
		width: 50%;
	}
`;

export default function Process() {
	return (
		<div>
			<Top>
				<Behind>Behind</Behind>
				<Pixels>the Pixels</Pixels>
				<Img src='static/images/dispatch/process.png'></Img>
			</Top>
			<FlexTwo>
				<Box>
					<Header>OUR PROCESS</Header>
					<Text>
						A whole lot of panic and winging it. We had roughly 28
						hours to design our mobile app from start to finish.
					</Text>
					<Text>
						Lena and I attempted to conduct user research but were
						unable to get police officers to respond to us...
					</Text>
					<Text>
						So we did our best with secondary literature research
						and then dove into one InVision freehand to brainstorm,
						ideate, and walk through user flows. Then we went into a
						Figma file and dove into multiple iterations of our high
						fidelity screens.
					</Text>
				</Box>
				<HalfSticky>
						<Img style={{width: '500px'}} src='static/images/dispatch/lol.jpg'></Img>
				</HalfSticky>
			</FlexTwo>
			<FlexTwo>
				<Box>
					<Header>FINAL PRESENTATION</Header>
					<Text>
						This was our final presentation for the Protothon,
						highlighting our process and design.
					</Text>
					<Text>
						<strong>We placed 3rd for the enterprise track!</strong>
					</Text>
					<Text>
						Click the image on the right to view my presentation
						slides.
					</Text>
				</Box>
				<HalfSticky>
					<a
						href='https://www.figma.com/proto/x1uLCzuJGUpXszsOYQyyw9/Dispatch?node-id=498%3A4555&scaling=contain'
						target='_blank'>
						<Img src='static/images/dispatch/presentation.png'></Img>
					</a>
				</HalfSticky>
			</FlexTwo>
			<Top>
				<Behind>Thank You,</Behind>
				<Pixels>Next</Pixels>
			</Top>
			<FlexTwo>
				<Div>
					<Header>REFLECTION</Header>
					<Text>
						This was a fun project because it was an interesting
						problem space that I would have never thought of. I
						learned a lot and was pretty stressed over the weekend,
						but I think it was worth it. Some lessons I learned:
					</Text>
					<Subheader>
						Without resources, just make informed decisions
					</Subheader>
					<Text>
						Without user research, we were a little lost in the
						beginning since it was hard to wrap our heads around the
						problem. But we had to push forward with the information
						that we had.
					</Text>
					<Subheader>Privacy and security matter a lot</Subheader>
					<Text>
						Although we didn’t have time to add privacy and security
						features to the app, this project really got me thinking
						about their impact for users, especially with critical
						information.
					</Text>
					<Subheader>Design is fun!</Subheader>
					<Text>
						This project was done during quarantine when I was
						feeling a little hopeless in my career and job hunt. It
						reminded me of what I love which is designing and
						solving user problems.
					</Text>
					<br />
					<Text>
						Thank you to Dubhacks for hosting the fun Protothon.
						Thanks to Lena for motivating me and being a great
						partner. After what happened this summer, I definitely
						feel discouraged about this project and the police
						system with its systematic brutality and racism.
						However, I’m keeping this in my portfolio because it’s
						some dope stuff.
					</Text>
				</Div>
			</FlexTwo>
		</div>
	);
}
