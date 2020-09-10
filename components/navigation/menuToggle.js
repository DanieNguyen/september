import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../device';

const Path = (props) => (
	<motion.path
		fill='transparent'
		strokeWidth='2'
		stroke='hsl(0, 0%, 18%)'
		strokeLinecap='round'
		{...props}
	/>
);

const TopLine = {
    closed: { d: 'M 8 6 L 20 6' },
    open: { d: 'M 6 18 L 18 6' }
}

const BottomLine = {
    closed: { d: 'M 2 18 L 14 18' },
    open: { d: 'M 6 6 L 18 18' }
}

const MiddleLine = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
}

const Button = styled(motion.button)`
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;

    position: fixed;
    right: 24px;
    top: 20px; 
	@media ${device.tablet} {
        right: 64px;
        top: 58px;    
	}
	
    width: 36px;
    height: 36px;
	border-radius: 50%;
	z-index: 110;
    background-color: transparent;
`;

export const MenuToggle = ({ toggle }) => (
	<Button onClick={toggle}>
		<svg width='24' height='24' viewBox='0 0 24 24'>
			<Path
				variants={TopLine}
			/>
			<Path
				d='M 2 12 L 20 12'
				variants={MiddleLine} 
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={BottomLine}
			/>
		</svg>
	</Button>
);
