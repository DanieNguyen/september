import Head from 'next/head';
import Nav from '../components/navigation/navbar';
import Layout from '../components/layout';
import Hero from '../components/dispatch/hero';
import Process from '../components/dispatch/process';
import Product from '../components/dispatch/product';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Dispatch</title>
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
