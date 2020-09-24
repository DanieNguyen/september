import Head from 'next/head';
import Nav from '../components/navigation/navbar';
import Layout from '../components/layout';
import Hero from '../components/canvas/hero';
import Process from '../components/canvas/process';
import Product from '../components/canvas/product';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Canvas Study Groups</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
			<Nav></Nav>
			<Layout>
				<Hero></Hero>
				<Product></Product>
				<Process></Process>
			</Layout>
		</div>
	);
}
