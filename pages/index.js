import Head from 'next/head';
import Nav from '../components/navbar';
import Intro from '../components/hero/intro';
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
