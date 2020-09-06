import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './menuItem';
import styled from 'styled-components';
import { device } from '../device';

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const MenuList = styled(motion.ul)`
    position: absolute;
    top: 140px;
    right: 36px;
    @media ${device.tablet} {
        right: 72px;  
    }
	width: 200px;
	z-index: 100;
`;

export const Navigation = () => (
	<MenuList variants={variants}>
		{itemIds.map((i) => (
			<MenuItem i={i} key={i} tag={i} />
		))}
	</MenuList>
);

const itemIds = [0, 1, 2, 3, 4];
