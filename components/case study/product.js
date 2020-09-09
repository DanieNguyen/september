import styled from 'styled-components';
import { device } from '../device';
import { Header, Text } from './text';
import { Video, Img, FlexTwo, Half } from './container';

const Center = styled.div`
	display: flex;
	justify-content: center;
	margin: 5vh 0 5vh 0;
`;

const Box = styled.div`
	@media ${device.laptop} {
		width: 40%;
	}
`;

const Caption = styled.div`
	width: 80%;
	margin-top: 1rem;
`;

const Fig = styled(Header)`
	margin-bottom: 0.5rem;
`;

const Card = styled.div`
	margin-bottom: 4rem;
`;

export default function Product() {
	return (
		<div>
			<Img src='static/images/spotify/hero.png'></Img>
			<Center>
				<Box>
					<Header>THE SOLUTION</Header>
					<Text>
						However, due to the reliance on a banner-based
						structure, the site faced several challenges, including
						difficulty scaling across devices, and a lack of visual
						consistency across markets.
					</Text>
				</Box>
			</Center>
			<FlexTwo>
				<Half>
					<Card>
						<Video loop muted playsInline autoPlay>
							<source
								src='static/videos/spotify/card.mp4'
								type='video/mp4'
							/>
							Your browser does not support the video tag.
						</Video>
						<Caption>
							<Fig>Easily browse through podcasts</Fig>
							<Text>
								However, due to the reliance on a banner-based
								structure, the site faced several challenges,
								including difficulty scaling across devices, and
								a lack of visual consistency across markets.
							</Text>
						</Caption>
					</Card>
					<Card>
						<Img src='static/images/spotify/variety.png'></Img>
						<Caption>
							<Fig>Discover a variety of podcasts</Fig>
							<Text>
								However, due to the reliance on a banner-based
								structure, the site faced several challenges,
								including difficulty scaling across devices, and
								a lack of visual consistency across markets.
							</Text>
						</Caption>
					</Card>
				</Half>
				<Half>
					<Video loop muted playsInline autoPlay>
						<source
							src='static/videos/spotify/article.mp4'
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</Video>
					<Caption>
						<Fig>Read, listen, and see what a podcast is about</Fig>
						<Text>
							However, due to the reliance on a banner-based
							structure, the site faced several challenges,
							including difficulty scaling across devices, and a
							lack of visual consistency across markets.
						</Text>
					</Caption>
				</Half>
			</FlexTwo>
		</div>
	);
}
