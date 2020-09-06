import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../device';

const Video = styled(motion.video)`
	width: 100%;
	cursor: pointer;
`;

const Img = styled(motion.img)`
	width: 100%;
	height: 100%;
	cursor: pointer;
`;

const Title = styled.h2`
	font-family: 'Basier-Medium';
	font-size: 20px;
	line-height: 24px;
	/* identical to box height, or 120% */

	text-align: center;
	letter-spacing: -0.03em;
	margin-top: 1rem;
`;

const Tagline = styled.h2`
	font-family: 'Basier';
	font-weight: normal;
	font-size: 18px;
	line-height: 24px;
	text-align: center;
	letter-spacing: -0.06em;
	color: #b4b1b1;
`;

const videos = ['static/videos/spotify.mp4'];
const images = ['static/images/spotify.png', 'static/images/canvas.png'];

const title = ['Spotify Podcasts', 'UW Canvas'];

const taglines = [
	'Helping listeners discover new podcasts',
	'Empowering student communities in online learning',
];

export default function Content({ i, video }) {
	let content = null;

	if (video) {
		content = (
			<Video
				whileHover={{ scale: 0.95 }}
				transition={{ ease: 'easeOut', duration: 0.3 }}
				onMouseEnter={(event) => event.target.play()}
				onMouseLeave={(event) => event.target.pause()}
				src={videos[i]}
				loop
				muted
				playsInline></Video>
		);
	} else {
		content = (
			<Img
				src={images[i]}
				whileHover={{ scale: 0.9 }}
				transition={{ ease: 'easeIn', duration: 0.8 }}></Img>
		);
	}

	return (
		<div>
			{content}
			<Title>{title[i]}</Title>
			<Tagline>{taglines[i]}</Tagline>
		</div>
	);
}
