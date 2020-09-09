import Head from 'next/head';
import Nav from '../components/navigation/navbar';
import Layout from '../components/layout';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../components/device';
import Hero from '../components/case study/hero';
import Process from '../components/case study/process';
import Product from '../components/case study/product';

export default function Home() {
	return (
		<div>
			<Head></Head>
			<Nav></Nav>
			<Layout>
				<Hero></Hero>
				<Product></Product>
				<Process></Process>
			</Layout>
		</div>
	);
}
