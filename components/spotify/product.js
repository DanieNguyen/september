import styled from 'styled-components';
import { device } from '../device';
import { Header, Text } from './text';
import { Video, Img, FlexTwo, Half, Center } from './container';
import Line from '../homepage/line';

const Box = styled.div`
	@media ${device.laptop} {
		width: 40%;
	}
`;

const Final = styled.div`
	font-family: DM Serif Display;
	font-style: normal;
	font-weight: normal;
	margin-bottom: 0rem;
	text-align: right;

	@media ${device.laptop} {
		font-size: 96px;
		line-height: 72px;
		margin-bottom: 1rem;
	}

	font-size: 32px;
	line-height: 32px;
	color: #dadada;
`;

const Solution = styled(Final)`
	margin-left: 0rem;
	margin-bottom: 2rem;
`;

const Top = styled.div`
	@media ${device.laptop} {
		margin-top: 2rem;
		margin-bottom: 0px;
	}
`;

const Caption = styled.div`
	@media ${device.laptop} {
		width: 70%;
	}
	margin-top: 1rem;
`;

const Fig = styled.h3`
	margin-bottom: 0.5rem;
	font-family: 'Basier-Bold';
	font-size: 20px;
	line-height: 28px;
`;

const Card = styled.div`
	margin-bottom: 3rem;
	@media ${device.laptop} {
		margin-bottom: 6rem;
	}
`;

export default function Product() {
	return (
		<div>
			<Top>
				<Final>The</Final>
				<Solution>Solution</Solution>
			</Top>
			<Img src='static/images/spotify/hero.png'></Img>
			<Center>
				<Box>
					<Header>THE SOLUTION</Header>
					<Text>
						Research showed that listeners wanted more information
						about a podcast before listening to it. I redesigned the
						podcast home page to spark discovery and listeners'
						understanding of podcasts. The redesign showcases
						podcasts through engaging mini-articles meant to clarify
						all listeners' questions about the content of a podcast.
					</Text>
				</Box>
			</Center>
			<FlexTwo>
				<Half>
					<Card>
						<Video loop muted playsInline autoPlay>
							<source
								src='static/videos/spotify/article.mp4'
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</Video>
						<Caption>
							<Fig>Digest bite-sized pieces of information</Fig>
							<Text>
								The short articles have clear call to actions
								and digestible information for listeners to
								understand a podcast in under 5 minutes.
							</Text>
						</Caption>
					</Card>
					<Card>
						<Img src='static/images/spotify/variety.png'></Img>
						<Caption>
							<Fig>Explore genres, topics, and new podcasts</Fig>
							<Text>
								The possibilities are endless with Featured
								Podcasts. Listeners can browse through articles
								highlighting a single podcast, a genre, topic,
								or even a celebrity's recommendations.
							</Text>
						</Caption>
					</Card>
				</Half>
				<Half>
					<Card>
						<Img src='static/images/spotify/cards.png'></Img>
						<Caption>
							<Fig>Understand at a glance</Fig>
							<Text>
								Expressive cards draw listeners in to discover
								new podcasts. Different card styles represent
								different article content from talking about one
								podcast to multiple podcasts.
							</Text>
						</Caption>
					</Card>
					<Card>
						<Video loop muted playsInline autoPlay>
							<source
								src='static/videos/spotify/card.mp4'
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</Video>
						<Caption>
							<Fig>Swipe for more</Fig>
							<Text>
								Following Spotify’s existing patterns, listeners
								can swipe to quickly browse and discover
								podcasts.
							</Text>
						</Caption>
					</Card>
				</Half>
			</FlexTwo>
		</div>
	);
}
