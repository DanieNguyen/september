import styled from 'styled-components';
import { device } from '../device';
import { Title, Subtitle, Header, Context, Text } from './text';
import { Video, Center } from './container';

const Hook = styled.div`
	z-index: 2;
	margin-top: 5vh;
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

const Summary = styled.div`
	@media ${device.laptop} {
		margin-left: 8vw;
		margin-top: 2rem;
		width: 60%;
	}
`;

const Splash = styled.div`
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
	@media ${device.laptop} {
		flex-direction: row;
		margin-top: 25vh;
		margin-bottom: 10vh;
	}
`;

const Table = styled.table`
	font-family: 'Basier';
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 24px;

	letter-spacing: -0.06em;
	margin-bottom: 1.5rem;
	color: ${({ theme }) => theme.colors.gray};
	border-top: 1px solid ${({ theme }) => theme.colors.gray};
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
	padding: 1rem 0 1rem 0;
	margin: 1rem 0 3rem 0;
	@media ${device.laptop} {
		display: none;
	}
`;

export default function Hero() {
	return (
		<Div>
			<Intro>
				<Splash>
					<Video loop muted playsInline autoPlay>
						<source
							src='static/videos/spotify/project.mp4'
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</Video>
				</Splash>
				<Hook>
					<Title>Helping listeners discover new podcasts</Title>
					<Summary>
						<Subtitle>Featured Podcasts</Subtitle>
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
				<Table>
					<tbody>
						<tr>
							<td>User Research</td>
							<td>Individual Project</td>
						</tr>
						<tr>
							<td>Visual Design</td>
							<td>8 weeks</td>
						</tr>
						<tr>
							<td>Product Design</td>
						</tr>
					</tbody>
				</Table>
				<Left>
					<Text>
						<strong>Individual Project</strong>
						<br /> July - Aug 2020 <br /> 8 weeks <br /> <br />{' '}
						<br /> <strong>Responsibilities </strong> <br /> User
						Research <br /> Visual Design <br /> Product Design
					</Text>
				</Left>
				<Right>
					<Header>THE PROBLEM</Header>
					<Text>
						As the leading music streaming platform, Spotify
						does a great job of providing a great listening
						experience with personalized playlists, lyrics, and
						more. However, with podcasts, the Spotify experience
						isn't quite the same.
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
