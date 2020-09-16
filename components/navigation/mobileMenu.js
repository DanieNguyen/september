import * as React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import { MenuToggle } from './menuToggle';
import { Navigation } from './navigation';
import styled from 'styled-components';
import { device } from '../device';

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 87% 8%)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2
		},
	}),
	closed: {
		clipPath: 'circle(24px at 100% 0%)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

const Sidebar = styled(motion.div)`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	width: 300px;
	@media ${device.tablet} {
		width: 600px;
	}
	background-color: white;
	z-index: 100;
	border-left: 1.6px solid ${({ theme }) => theme.colors.lightgray};
`;

const Nav = styled(motion.nav)`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	width: 0;
	z-index: 100;
`;

let width = null;

export const Hamburger = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	return (
		<Nav
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			ref={containerRef}>
			<Sidebar variants={sidebar} />
			<MenuToggle toggle={() => toggleOpen()} />
			<Navigation toggle={isOpen} />
		</Nav>
	);
};
