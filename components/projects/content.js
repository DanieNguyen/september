import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../device';

const Video = styled(motion.video)`
	width: 100%;
`;

const Img = styled(motion.img)`
	width: 100%;
	height: 100%;
`;

const Title = styled.h2`
	font-family: 'Basier-Medium';
	font-size: 20px;
	line-height: 24px;
	/* identical to box height, or 120% */

	text-align: left;
	@media ${device.tablet} {
		text-align: center;
	}
	letter-spacing: -0.03em;
	margin-top: 1.5rem;
`;

const Tagline = styled.h2`
	font-family: 'Basier';
	font-weight: normal;
	font-size: 18px;
	line-height: 24px;
	text-align: left;
	@media ${device.tablet} {
		text-align: center;
	}
	letter-spacing: -0.03em;
	color: ${({ theme }) => theme.colors.gray};
`;

const videos = ['static/videos/spotify/project.mp4'];
const images = [
	'static/images/spotify.png',
	'static/images/canvas.png',
	'static/images/vita.png',
	'static/images/dispatch.png',
];

const alt = [
	'Spotify Podcasts Project',
	'UW Canvas Project',
	'Vita OS Project',
	'Dispatch Project',
];

const title = ['Spotify Podcasts', 'UW Canvas', 'Vita OS', 'Dispatch'];

const taglines = [
	'Helping listeners discover new podcasts',
	'Empowering student communities in online learning',
	'Promoting personal well-being in technology',
	'Assisting police officers on foot patrol',
];

export default function Content({ i, video, home }) {
	let content = null;
	let words = null;
	if (video) {
		content = (
			<Video
				whileHover={{ scale: 0.96 }}
				transition={{ yduration: 0.3 }}
				onMouseEnter={(event) => event.target.play()}
				onMouseLeave={(event) => event.target.pause()}
				loop
				muted
				playsInline
				poster={images[i]}>
				<source src={videos[i]} type='video/mp4' />
				Your browser does not support the video tag.
			</Video>
		);
	} else {
		content = (
			<Img alt={alt[i]}
				src={images[i]}
				whileHover={{ scale: 0.96 }}
				transition={{ duration: 0.3 }}></Img>
		);
	}

	if (home) {
		words = (
			<div>
				<Title>{title[i]}</Title>
				<Tagline>{taglines[i]}</Tagline>
			</div>
		);
	}

	return (
		<div>
			{content}
			{words}
		</div>
	);
}
