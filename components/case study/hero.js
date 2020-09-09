import styled from 'styled-components';
import { device } from '../device';
import { Title, Subtitle, Header, Context, Text } from './text';
import { Video } from './container';

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
		width: 50%;
	}
`;

const Overview = styled.div`
	display: flex;
	flex-direction: column;
	@media ${device.laptop} {
		flex-direction: row;
		width: 50vw;
		margin-top: 10vh;
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
						<Subtitle>SPOTIFY PODCASTS</Subtitle>
						<Text>
							Spotify is the world’s leading audio streaming
							platform with millions of songs and podcasts
							episodes. Right now, Spotify is pushing forward in
							the podcast industry with podcast deals and
							exclusive content.
						</Text>
						<Text>
							However, the current mobile app does little to help
							users discover and learn about new podcasts. I took
							the initiative to redesign the podcast home page to
							be more engaging for prospective listeners.
						</Text>
					</Summary>
				</Hook>
			</Intro>
			<Overview>
				<Context>
					Individual Project <br />8 weeks <br /> <br />
					User Research <br /> Visual Design <br />
					Product Design
				</Context>
				<Table>
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
				</Table>
				<Left>
					<Header>THE CHALLENGE</Header>
					<Text>
						However, due to the reliance on a banner-based
						structure, the site faced several challenges, including
						difficulty scaling across devices, and a lack of visual
						consistency across markets.
					</Text>
					<Header>THE APPROACH</Header>
					<Text>
						However, due to the reliance on a banner-based
						structure, the site faced several challenges, including
						difficulty scaling across devices, and a lack of visual
						consistency across markets.
					</Text>
				</Left>
			</Overview>
		</Div>
	);
}
