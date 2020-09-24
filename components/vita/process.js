import styled from 'styled-components';
import { device } from '../device';
import Line from '../homepage/line';
import { Header, Text, A } from '../caseStudy/text';
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
				<Img
					src='static/images/vita/process.png'
					alt='Snapshot of Vita Design process'></Img>
			</Top>
			<FlexTwo>
				<Box>
					<Header>RESEARCH</Header>
					<Text>
						The idea for our OS came after our team vented about
						finding jobs and working for the rest of our lives.
					</Text>
					<Text>
						We noted how discouraging our phones were in how they
						only show everyone's perfect lives and distract us with
						addictive social media.
					</Text>
					<Text>
						We conducted research through surveys and academic
						articles to see if other young adults felt the same way
						about their phones.
					</Text>
				</Box>
				<HalfSticky>
					<Img
						src='static/images/vita/methods.png'
						alt='Research methods used'></Img>
					<div>
						<Img
							src='static/images/vita/article.png'
							alt='Title of helpful article'></Img>
						<CaptionTwo>
							A very insightful article talking about smartphone
							addiction
						</CaptionTwo>
					</div>
				</HalfSticky>
			</FlexTwo>
			<FlexTwo>
				<Box>
					<Header>FINDINGS</Header>
					<Text>
						From our surveys, we learned that young adults had
						several pain points about their phone usage.
					</Text>
					<Subheader>Pain Points</Subheader>
					<UL>
						<Li>
							Being distracted from life through mindless browsing{' '}
						</Li>
						<Li>
							Working after hours because of stress from
							notifications
						</Li>
						<Li>
							Feeling discouraged from seeing others’ online
							personas
						</Li>
					</UL>
					<Text>
						However, they recognized that their phone is essential
						to their daily life and helps them plan, communicate,
						and connect with others.
					</Text>
				</Box>
				<HalfSticky>
					<Img
						src='static/images/vita/painpoints.png'
						alt='pain points found from survey'></Img>
				</HalfSticky>
			</FlexTwo>
			<FlexTwo>
				<Box>
					<Header>PROBLEM</Header>
					<Text>
						With our findings, we identified the overall concept for
						our OS. We wanted to tackle the problem of helping young
						adults balance their lives and phone usage.
					</Text>
					<Subheader>Design Goals</Subheader>
					<UL>
						<Li>
							Help young adults achieve a better work-life balance
						</Li>
						<Li>
							Encourage them to focus on person goals and
							interests
						</Li>
						<Li>
							Support them in creating and maintaining
							relationships
						</Li>
					</UL>
				</Box>
				<HalfSticky>
					<Img
						src='static/images/vita/problem.png'
						alt='problem defined'></Img>
				</HalfSticky>
			</FlexTwo>
			<FlexTwo>
				<StickyBox>
					<Header>FOUNDATION</Header>
					<Text>
						To keep our large team on track over this project, we
						made sure to lay a solid foundation of our OS. We
						followed the metaphor of the bullet journal to inspire
						our design.
					</Text>
					<Text>
						We then made two personas and four design principles for
						everyone to refer to as we split up to design apps.
					</Text>
				</StickyBox>
				<HalfSticky>
					<Img
						src='static/images/vita/bullet.png'
						alt='bullet journal inspiration'></Img>
					<Img
						src='static/images/vita/kelly.png'
						alt='kelly persona'></Img>
					<div>
						<Img
							src='static/images/vita/steph.png'
							alt='stephen persona'></Img>
						<Caption>
							Meet Kelly and Stephen! Our two young adults who
							need Vita OS :)
						</Caption>
					</div>
					<div>
						<Img
							src='static/images/vita/principles.png'
							alt='design principles'></Img>
					</div>
				</HalfSticky>
			</FlexTwo>
			<FlexTwo>
				<StickyBox>
					<Header>DESIGN SYSTEM</Header>
					<Text>
						As we moved into designing apps, I was in charge of
						creating a consistent design system for our OS. I chose
						our system typography, colors, and created reusable
						components.
					</Text>
					<Text>
						I also worked to build out the component library in
						Figma to help my team be more efficient.
					</Text>
				</StickyBox>
				<HalfSticky>
					<Img
						src='static/images/vita/style.png'
						alt='design system and style guide'></Img>
				</HalfSticky>
			</FlexTwo>
			<FlexTwo>
				<StickyBox>
					<Header>APP DESIGN</Header>
					<Text>
						After laying out the overarching design system and
						principles, we dove into our app ideas. We had extremely
						quick design sprints for each app since our timeline was
						short.
					</Text>
					<Text>
						Since it was a little chaotic, we didn't get to properly
						document all the iterations for the apps. But, here are
						some of the ideas that developed for the apps that I
						worked on (Home, Messages, and Wallet).
					</Text>
				</StickyBox>
				<HalfSticky>
					<Img
						src='static/images/vita/timeline.png'
						alt='timeline for design'></Img>
					<Img
						src='static/images/vita/apps.png'
						alt='design of apps = home, wallet, and messages'></Img>
				</HalfSticky>
			</FlexTwo>
			<FlexTwo>
				<Box>
					<Header>FINAL DESIGN + PRESENTATION</Header>
					<Text>
						At the end of our 10 weeks, we presented our final
						designs to industry judges.
					</Text>
					<Text>
						We received a perfect score from industry judges and
						placed 1st out of the class.
					</Text>
					<Text>
						<A
							href='https://www.figma.com/proto/xwcUDhblAXLzk4lO0ZT73V/Vita-Final-Presentation?node-id=498%3A4555&scaling=contain'
							target='_blank'>
							Click here
						</A>{' '}
						or the image on the right to view my presentation
						slides.
					</Text>
				</Box>
				<HalfSticky>
					<a
						href='https://www.figma.com/proto/xwcUDhblAXLzk4lO0ZT73V/Vita-Final-Presentation?node-id=498%3A4555&scaling=contain'
						target='_blank'>
						<Img
							src='static/images/vita/presentation.png'
							alt='first presentation slide'></Img>
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
						This was one of the most challenging projects I’ve
						worked on because of the rapid amount of design and
						prototyping needed for over 12 different apps in under
						10 weeks. But, I loved being able to lead the visual
						design system and thinking beyond mobile apps into an
						OS. Some lessons that I learned:
					</Text>
					<Subheader>Stay true to your heart</Subheader>
					<Text>
						Because we had to focus on different apps and ideas
						every week, it was easy to forget what our mission was
						about when looking at competing and existing apps. But
						keeping in mind our personas and design principles
						helped us stay true to the heart of the problem and
						concept.
					</Text>
					<Subheader>Get others to buy in</Subheader>
					<Text>
						This was my first project where I was one of the more
						senior designers of the project, leading the visual
						design and facilitating brainstorming and feedback
						sessions. I learned a lot about articulating design
						decisions and explaining my perspective while
						encouraging others to speak up too.
					</Text>
					<Subheader>Keep it simple silly</Subheader>
					<Text>
						A classic lesson. But for this project, it was
						important. Since we had to work across so many apps, it
						was important to not be extravagant in one app. For our
						apps, we focused on highlighting 1-3 key features that
						would convey our concept.
					</Text>
					<br />
					<Text>
						Thank you to Brian Fling and Khang Lee for guiding my
						team during this project. Thanks to my team for being
						great and putting together this fun project through
						endless nights.
					</Text>
				</Div>
			</FlexTwo>
		</div>
	);
}
