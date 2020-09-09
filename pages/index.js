import Head from 'next/head';
import Nav from '../components/navigation/navbar';
import Intro from '../components/homepage/intro';
import Projects from '../components/projects/projects';
import Layout from '../components/layout';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../components/device';

export default function Home() {
	return (
		<div>
			<Head></Head>
			<Nav></Nav>
			<Layout>
				<Intro></Intro>
				<Projects></Projects>
			</Layout>
		</div>
	);
}
