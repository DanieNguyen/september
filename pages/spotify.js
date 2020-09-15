import Head from 'next/head';
import Nav from '../components/navigation/navbar';
import Layout from '../components/layout';
import Hero from '../components/spotify/hero';
import Process from '../components/spotify/process';
import Product from '../components/spotify/product';

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
