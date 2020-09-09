import styled from 'styled-components';
import { device } from '../device';

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

const Title = styled.h1`
	font-family: DM Serif Display;
	font-style: normal;
	font-weight: normal;
	margin-bottom: 1rem;
	@media ${device.laptop} {
		font-size: 72px;
		line-height: 72px;
		margin-bottom: 0rem;
	}
	font-size: 32px;
	line-height: 32px;
`;

const Subtitle = styled.h2`
	font-family: 'Basier-Medium';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 24px;

	letter-spacing: -0.06em;
	margin-bottom: 1.5rem;
	color: #1db954;
`;

const Summary = styled.div`
	@media ${device.laptop} {
		margin-left: 8vw;
		margin-top: 2rem;
		width: 60%;
    }
`;

const Text = styled.p`
	font-family: 'Basier';
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 24px;

	letter-spacing: -0.06em;
	margin-bottom: 1.5rem;
`;

const Video = styled.video`
	max-width: 100%;
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

const Context = styled(Text)`
    display: none;
    @media ${device.laptop} {
        color: ${({ theme }) => theme.colors.gray};
        margin-left: 8vw;
        margin-top: 3rem;
        width: 30%;
        display: block;
    }
    @media ${device.desktop} {
		color: ${({ theme }) => theme.colors.gray};
        margin-left: 0vw;
        margin-top: 3rem;
        width: 20%;
        display: block;
	}
`;

const Header = styled(Subtitle)`
	color: ${({ theme }) => theme.colors.text};
	margin-left: 0vw;
	width: 100%;
	margin-top: 0rem;
	margin-bottom: 1.5rem;
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

const Full = styled.div`
	background-color: lightgray;
	width: 100%;
	height: 90vh;
`;

const Center = styled.div`
	display: flex;
	justify-content: center;
	margin: 5vh 0 10vh 0;
`;

const Box = styled.div`
	@media ${device.laptop} {
        width: 40%;
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
							src='static/videos/spotify.mp4'
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
			<Full></Full>
			<Center>
				<Box>
					<Header>Introducing Featured Podcasts</Header>
					<Text>
						However, due to the reliance on a banner-based
						structure, the site faced several challenges, including
						difficulty scaling across devices, and a lack of visual
						consistency across markets.
					</Text>
				</Box>
			</Center>
		</Div>
	);
}
