import styled from 'styled-components';
import { device } from '../device';
import Line from '../homepage/line';
import { Header, Text, options } from '../caseStudy/text';
import { Img, FlexTwo, Half, Center } from '../caseStudy/container';
import { SRLWrapper } from 'simple-react-lightbox';

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
				<Img
					src='static/images/canvas/process.png'
					alt='Design Process Snapshot'></Img>
			</Top>
			<SRLWrapper options={options}>
				<FlexTwo>
					<StickyBox>
						<Header>RESEARCH</Header>
						<Text>
							Our process began with research to understand online
							learning behaviors and student interactions with UW
							Canvas.
						</Text>
						<Text>
							We started with a thorough literary analysis of how
							learning management systems work. Then we conducted
							semi-structured user interviews and a contextual
							inquiry to analyze how students perceive online
							learning and Canvas itself.
						</Text>
						<Text>
							Our last research method was conducting a
							competitive analysis of LMS such as BlackBoard to
							see what features and interactions competitors focus
							on.
						</Text>
					</StickyBox>
					<HalfSticky>
						<Img
							src='static/images/canvas/methods.png'
							alt='Research methods used'></Img>
						<div>
							<Img
								src='static/images/canvas/survey.png'
								alt='Survey Screenshot'></Img>
							<CaptionTwo>
								We used a Google Form and posted online to find
								participants
							</CaptionTwo>
						</div>
						<div>
							<Img
								src='static/images/canvas/thematic.png'
								alt='Thematic analysis of survey'></Img>
							<CaptionTwo>
								Thematic analysis of interview quotes
							</CaptionTwo>
						</div>
						<Img
							src='static/images/canvas/logos.png'
							alt='Logos of companies looked at in competitive analysis'></Img>
						<div>
							<Img
								src='static/images/canvas/competitive.svg'
								alt='Competitive analysis document'></Img>
							<CaptionTwo>
								Ranking the top 5 college LMS by their UX for
								features
							</CaptionTwo>
						</div>
					</HalfSticky>
				</FlexTwo>
				<FlexTwo>
					<StickyBox>
						<Header>FINDINGS</Header>
						<Text>
							From our research, we learned that students take
							online courses because of their flexible schedules.
							However, it's hard to interact in online courses
							compared to in-person courses.
						</Text>
						<Subheader>Pain Points</Subheader>
						<UL>
							<Li>
								In-class interactions and questions with
								classmates are key to student learning, but
								unavailable in online courses.
							</Li>
							<Li>
								Students never made any friends in online
								courses and rarely talked to other classmates.
							</Li>
							<Li>
								Online courses lack resources such as professor
								and TA office hours.
							</Li>
							<Li>
								Canvas discussions do not really function as
								discussions. Students rarely engage back and
								forth.
							</Li>
							<Li>
								Students view Canvas as an information hub, but
								not an engaging learning center.
							</Li>
						</UL>
					</StickyBox>
					<HalfSticky>
						<Img
							src='static/images/canvas/painpoints.png'
							alt='List of user painpoints'></Img>
					</HalfSticky>
				</FlexTwo>
				<FlexTwo>
					<Box>
						<Header>PROBLEM</Header>
						<Text>
							From our interviews and other insights, our team
							defined the problem to be a lack of student
							interaction. Students depend on others to help with
							their learning, and online courses currently aren't
							conducive to student interactions.
						</Text>
						<Text>
							Our team wanted to find a solution that would
							improve student collaboration and communication
							inside of Canvas.
						</Text>
					</Box>
					<HalfSticky>
						<Img
							src='static/images/canvas/problem.png'
							alt='Problem Defined'></Img>
					</HalfSticky>
				</FlexTwo>
				<FlexTwo>
					<StickyBox>
						<Header>IDEATION</Header>
						<Text>
							With our problem space, we moved into ideation. To
							come up with ideas, we identified three questions
							for us to brainstorm around.
						</Text>
						<Text>
							We then came up with a diverse list of ideas that
							solve the problem in unique ways.
						</Text>
					</StickyBox>
					<HalfSticky>
						<div>
							<Img
								src='static/images/canvas/questions.png'
								alt='Guiding Questions for Ideation'></Img>
							<Caption>
								Our guiding questions for ideation
							</Caption>
						</div>
						<div>
							<Img
								src='static/images/canvas/brainstorm.png'
								alt='Screenshot of brainstorm'></Img>
							<Caption>
								A list of ideas we had, with informal
								descriptions
							</Caption>
						</div>
					</HalfSticky>
				</FlexTwo>
				<FlexTwo>
					<StickyBox>
						<Header>CONCEPT TESTING</Header>
						<Text>
							From our ideas, we narrowed down to our five
							favorite ideas. To decide on our solution, we
							reached out to students again. We conducted concept
							testing and asked 30 students to rank their favorite
							three ideas out of the five.
						</Text>
						<Text>
							<strong>The top idea was Study Groups.</strong>
						</Text>
					</StickyBox>
					<HalfSticky>
						<Img
							src='static/images/canvas/topfive.png'
							alt='Top 5 best ideas and what they are'></Img>
						<Img
							src='static/images/canvas/conceptresults.svg'
							alt='results of concept testing'></Img>
					</HalfSticky>
				</FlexTwo>
				<FlexTwo>
					<StickyBox>
						<Header>SOLUTION</Header>
						<Text>
							From concept testing, students liked the idea of
							online study groups the most. Our team moved forward
							with this solution and came up with several key
							features that it would have.
						</Text>
						<Text>
							We saw an opportunity to incorporate instant
							messaging into study groups since it would be a
							great form of communication.
						</Text>
					</StickyBox>
					<HalfSticky>
						<Img
							src='static/images/canvas/solution.png'
							alt='Chosen solution is Study Groups'></Img>
					</HalfSticky>
				</FlexTwo>
				<FlexTwo>
					<StickyBox>
						<Header>INFORMATION ARCHITECTURE</Header>
						<Text>
							After defining the scope of features, we dove into
							information architecture. Some of the concepts we
							had to discuss were how study groups will best fit
							into UW Canvas, where and how will students join a
							study group, and what can they do in a study group.
						</Text>
					</StickyBox>
					<HalfSticky>
						<Img
							src='static/images/canvas/information.svg'
							alt='global information architecture'></Img>
						<Img
							src='static/images/canvas/studyinfo.svg'
							alt='information architecture for study groups'></Img>
					</HalfSticky>
				</FlexTwo>
				<FlexTwo>
					<StickyBox>
						<Header>USER FLOWS</Header>
						<Text>
							We then worked on creating user flows. Our team
							iterated on what interactions and entry/exit points
							we wanted Study Groups to have since it's a new
							feature that needs to be incoprated smoothly.
						</Text>
					</StickyBox>
					<HalfSticky>
						<Img
							src='static/images/canvas/prompt.svg'
							alt='user flow for introducing study groups'></Img>
						<Img
							src='static/images/canvas/announcement.svg'
							alt='user flow for making an announcement'></Img>
					</HalfSticky>
				</FlexTwo>
				<FlexTwo>
					<StickyBox>
						<Header>LOW + MEDIUM FIDELITY</Header>
						<Text>
							With our fleshed out structure for Study Groups, we
							went to designing our prototype. We focused on
							creating the user flows we wanted to highlight for
							usability testing.
						</Text>
						<Text>
							We wanted to learn if students would be curious
							about study groups when introduced, how they view
							messaging, and what types of posts they would make.
						</Text>
					</StickyBox>
					<HalfSticky>
						<Img
							src='static/images/canvas/lofi.png'
							alt='lofi fidelity wireframes'></Img>
						<Img
							src='static/images/canvas/med.png'
							alt='medium fidelity wireframes'></Img>
					</HalfSticky>
				</FlexTwo>
				<FlexTwo>
					<StickyBox>
						<Header>USABILITY TESTING</Header>
						<Text>
							To validate our design, we conducted 8 usability
							tests with students going through the introduction,
							matchmaking, messaging, and announcement flows.
						</Text>
						<Text>
							We learned a lot about what students value in study
							groups. Here are the key takeaways we had:
						</Text>
						<UL>
							<Li>
								Copy is very important for onboarding and
								influences student behavior
							</Li>
							<Li>
								The quiz doesn't help students find other
								students with similar interests
							</Li>
							<Li>
								Edge cases are essential. What if students don't
								like a study group?
							</Li>
							<Li>
								Messaging is more important than announcements
								and posts
							</Li>
						</UL>
					</StickyBox>
					<HalfSticky>
						<Img
							src='static/images/canvas/usability.png'
							alt='results of usability test'></Img>
					</HalfSticky>
				</FlexTwo>
				<FlexTwo>
					<StickyBox>
						<Header>HIGH FIDELITY</Header>
						<Text>
							With our feedback from the usability tests, our team
							went through three rounds of iteration to reach our
							high fidelity prototypes.
						</Text>
						<Text>
							We made a lot of changes such as restructuring the
							main page to prioritize messaging, improving the
							visual hierarchy of announcements, and many more.
						</Text>
					</StickyBox>
					<HalfSticky>
						<Img
							src='static/images/canvas/hifi.png'
							alt='hifi mockups and changes'></Img>
						<div>
							<Img
								src='static/images/canvas/hifiall.png'
								alt='screenshot of all final screens'></Img>
							<Caption>All of the final screens</Caption>
						</div>
					</HalfSticky>
				</FlexTwo>
				<FlexTwo>
					<StickyBox>
						<Header>FINAL MOCKUPS</Header>
						<Text>
							We weren't able to conduct a second round of
							usability tests with our high fidelity prototypes,
							but feedback from the UW Continuum College team and
							our mentors were very positive about our changes.
						</Text>
						<Text>
							Here are a few key final mockups showing the changes
							that solve the issues found from our usability
							testing.
						</Text>
					</StickyBox>
					<HalfSticky>
						<Img
							src='static/images/canvas/final.png'
							alt='final mockups'></Img>
					</HalfSticky>
				</FlexTwo>
			</SRLWrapper>
			<FlexTwo>
				<Box>
					<Header>VIDEO</Header>
					<Text>
						As part of the virtual capstone showcase, our team
						crafted this video highlighting the problem space and
						our solution. Check it out for a concise demonstration
						of Study Group's features. Thank you for looking through
						this case study!
					</Text>
				</Box>
				<HalfSticky>
					<iframe
						width='100%'
						height='500'
						src='https://www.youtube.com/embed/q-P55l8iAx0'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen></iframe>
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
						This project was close to the heart as our team was
						dealing with the lack of motivation and negative mental
						health impacts that online school had during quarantine.
						However, I’m proud of our team for pushing through and
						creating a feature that would help future online
						students if implemented. I learned a lot through this
						project and some key takeaways are:
					</Text>
					<Subheader>It’s always about what the user wants</Subheader>
					<Text>
						Being able to reach out and conduct concept testing with
						users to guide us forward in our design was immensely
						helpful when our team was stuck with many great ideas.
					</Text>
					<Subheader>Communication is key</Subheader>
					<Text>
						Working remotely was pretty difficult as our team wasn’t
						used to conducting tests and design sessions online but
						maintaining strong communication made it a lot easier.
					</Text>
					<Subheader>Positive vibes only</Subheader>
					<Text>
						One lesson I learned was that language and copy can
						really make or break a product. It’s important that the
						feature communicates what it is to users clearly.
					</Text>
					<br />
					<Text>
						Thanks to my capstone team for all the zoom calls,
						Messenger calls, and FaceTime calls (clearly need to
						choose a main platform next time). Thanks to Regina and
						UW Continuum College for guiding us through this
						project.
					</Text>
				</Div>
			</FlexTwo>
		</div>
	);
}
