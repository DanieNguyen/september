import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../device';
import Link from 'next/link';

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const Item = styled(motion.li)`
	list-style: none;
	margin-bottom: 20px;
	@media ${device.tablet} {
		margin-bottom: 40px;
	}
	display: flex;
	align-items: center;
	cursor: pointer;
	z-index: 130;
`;

const Box = styled.div`
	width: 200px;
	height: 48px;
	flex: 1;

	font-family: DM Serif Display;
	font-style: normal;
	font-weight: normal;
	font-size: 32px;
	line-height: 32px;
	letter-spacing: -0.03em;
	text-align: right;

	@media ${device.tablet} {
		font-size: 48px;
		line-height: 48px;
	}
	z-index: 120;
`;

const words = ['work', 'about', 'contact', 'resume'];
const link = ['/', '/', '/', '/'];

export const MenuItem = ({ i }) => {
	return (
		<Link href={link[i]} passHref>
			<Item
				variants={variants}
				whileHover={{ x: -20 }}
				whileTap={{ scale: 0.95 }}>
				<Box>{words[i]}</Box>
			</Item>
		</Link>
	);
};
