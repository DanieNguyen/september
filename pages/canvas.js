import Head from 'next/head';
import Nav from '../components/navigation/navbar';
import Layout from '../components/layout';
import Hero from '../components/canvas/hero';
import Process from '../components/canvas/process';
import Product from '../components/canvas/product';

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
