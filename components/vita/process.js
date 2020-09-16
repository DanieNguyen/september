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
				<Img src='static/images/spotify/process.png'></Img>
			</Top>
			<FlexTwo>
				<StickyBox>
					<Header>RESEARCH</Header>
					<Text>
						My process began with research to understand podcasts as
						a listening experience and an industry.
					</Text>
					<Text>
						I conducted semi-structured user interviews, explored
						large-scale behaviors through a literature review, and
						examined the industry with a competitive analysis of
						podcast apps.
					</Text>
				</StickyBox>
				<HalfSticky>
					<Img src='static/images/spotify/methods.png'></Img>
					<div>
						<Img src='static/images/spotify/zoom.png'></Img>
						<Caption>
							Interviewing a close friend who listens to podcasts
						</Caption>
					</div>
					<div>
						<Img src='static/images/spotify/comp.png'></Img>
						<CaptionTwo>
							Evaluating the top seven podcast apps
						</CaptionTwo>
					</div>
				</HalfSticky>
			</FlexTwo>
			<FlexTwo>
				<StickyBox>
					<Header>FINDINGS</Header>
					<Text>
						From my research, I learned that podcasts are wonderful
						to listen to and are a part of peoples' daily routine.
						However, it's hard for listeners to discover new
						podcasts.
					</Text>
					<Subheader>Pain Points</Subheader>
					<UL>
						<Li>Users only listen to a handful podcasts</Li>
						<Li>
							Recommendations are the only way users try new
							podcasts
						</Li>
						<Li>Users don’t browse through podcasts on Spotify</Li>
						<Li>
							It takes at least 5-10 minutes of listening to
							understand a new podcast
						</Li>
					</UL>
				</StickyBox>
				<HalfSticky>
					<Img src='static/images/spotify/painpoints.png'></Img>
				</HalfSticky>
			</FlexTwo>
			<FlexTwo>
				<Box>
					<Header>PROBLEM</Header>
					<Text>
						With my insights, I defined my guiding question and
						scope. I wanted to help listeners discover new podcasts
						easily and quickly.
					</Text>
					<Subheader>Design Goals</Subheader>
					<UL>
						<Li>
							Get users to discover in Spotify, not through
							recommendations
						</Li>
						<Li>Showcase podcasts to draw listeners in</Li>
						<Li>
							Reduce the time it takes to understand a single
							podcast
						</Li>
					</UL>
				</Box>
				<HalfSticky>
					<Img src='static/images/spotify/problem.png'></Img>
				</HalfSticky>
			</FlexTwo>
			<FlexTwo>
				<StickyBox>
					<Header>IDEATION</Header>
					<Text>
						After defining the problem, I went to the drawing board.
						I explored many different apps and websites such as
						YouTube, Twitter, etc. to see how they help users
						discover new things.
					</Text>
					<Text>
						With a variety of ideas, I scoped down by conducting an
						effort impact analysis. My top three ideas were a
						ratings and review system, showing friends' podcast
						activities, and a featured podcast section with curated
						articles.
					</Text>
				</StickyBox>
				<HalfSticky>
					<div>
						<Img src='static/images/spotify/apps.png'></Img>
						<CaptionTwo>
							Some of the apps I looked at for inspiration
						</CaptionTwo>
					</div>
					<div>
						<Img src='static/images/spotify/effort.png'></Img>
						<Caption>
							Comparing the effort to implement and impact on
							listeners for my ideas
						</Caption>
					</div>
					<div>
						<Img src='static/images/spotify/topthreewhite.png'></Img>
						<CaptionTwo>
							My top three ideas with their pros and cons
						</CaptionTwo>
					</div>
				</HalfSticky>
			</FlexTwo>
			<FlexTwo>
				<Box>
					<Header>SOLUTION</Header>
					<Text>
						I chose to move forward with my idea of Featured
						Podcasts because it has the best opportunity to guide
						users to browse in Spotify, doesn't interrupt users'
						listening experience, and can provide the most
						information about a podcast.
					</Text>
				</Box>
				<HalfSticky>
					<Img src='static/images/spotify/solution.png'></Img>
				</HalfSticky>
			</FlexTwo>
			<FlexTwo>
				<StickyBox>
					<Header>INFORMATION ARCHITECTURE</Header>
					<Text>
						With my solution, I moved into mapping out the
						information architecture. Some key decisions I had to
						figure out was where would the featured section live on
						the podcast page, how much information would be in an
						article, and what kind of actions can users expect to
						see.
					</Text>
				</StickyBox>
				<HalfSticky>
					<Img src='static/images/spotify/sitemap.png'></Img>
					<Img src='static/images/spotify/information.png'></Img>
				</HalfSticky>
			</FlexTwo>
			<FlexTwo>
				<Box>
					<Header>PROTOTYPING</Header>
					<Text>
						I went into high-fidelity prototyping soon after because
						of time constraints. For visual design, I tried my best
						to align myself with Spotify's design principles.
					</Text>
				</Box>
				<HalfSticky>
					<div>
						<Img src='static/images/spotify/screens.png'></Img>
						<Caption>
							Some of the components and screens I designed
						</Caption>
					</div>
				</HalfSticky>
			</FlexTwo>
			<FlexTwo>
				<StickyBox>
					<Header>ITERATIONS</Header>
					<Text>
						Although I couldn't schedule any formal usability tests,
						I was able to receive feedback from users throughout
						designing my prototype.
					</Text>
					<Text>
						I made several decisions and changes from the feedback
						such as creating a new component for soundbites,
						utilizing multiple types of cards to draw attention, and
						cutting down on content for users to easily skim.
					</Text>
				</StickyBox>
				<HalfSticky>
					<Img src='static/images/spotify/soundbite.png'></Img>
					<Img src='static/images/spotify/carditerations.png'></Img>
				</HalfSticky>
			</FlexTwo>
			<FlexTwo>
				<Box>
					<Header>FINAL PRESENTATION</Header>
					<Text>
						At the end of my 8 weeks, I presented this project to
						the Applied 2020 community. I received recognition for
						having great visual design, presentation and
						storytelling, and won the audience's favorite for my
						presentation session.
					</Text>
					<Text>
						Click the image on the right to view my presentation
						slides.
					</Text>
				</Box>
				<HalfSticky>
					<a
						href='https://www.figma.com/proto/GKTnBdvZiY0J5u04dEpd87/Final-Presentation?node-id=1%3A2&scaling=contain'
						target='_blank'>
						<Img src='static/images/spotify/presentation.png'></Img>
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
						This was a really exciting and fun project for me to
						work on because I had to dive into an unknown product,
						design system, and problem space. I learned so much in
						this project and here are some of my key takeaways.
					</Text>
					<Subheader>Iterate, iterate, iterate</Subheader>
					<Text>
						It’s important to continue thinking outside and inside
						the box at every step of the design process. Being
						open-minded helped me go through many ideas and find the
						best solution at each step.
					</Text>
					<Subheader>
						Think big picture, but design little pixels
					</Subheader>
					<Text>
						Something I focused on for this project was working
						within constraints. I made sure to choose the most
						feasible, impactful solution to the problem instead of
						designing a brand new, sky-high experience like many of
						my course projects.
					</Text>
					<Subheader>Feedback is always valuable</Subheader>
					<Text>
						Within the 8 weeks, it was difficult to conduct a lot of
						formal usability and a/b testing. But, being able to
						reach out and just ask for small feedback helped me
						throughout the process immensely.
					</Text>
					<br />
					<Text>
						Thanks to the Applied program for providing a fun
						mock-internship experience! I appreciate my buddies,
						mentors, and fellow designers for their wonderful
						feedback on this project.
					</Text>
				</Div>
			</FlexTwo>
		</div>
	);
}
