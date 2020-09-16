import Head from 'next/head';
import Nav from '../components/navigation/navbar';
import Layout from '../components/layout';
import Hero from '../components/dispatch/hero';
import Process from '../components/dispatch/process';
import Product from '../components/dispatch/product';

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
