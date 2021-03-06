import Head from 'next/head';
import Nav from '../components/navigation/navbar';
import Intro from '../components/homepage/intro';
import Projects from '../components/projects/projects';
import Layout from '../components/layout';
import Footer from '../components/homepage/footer';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Daniel Nguyen</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
			<Nav aria-label='Navigation Menu'></Nav>
			<Layout>
				<Intro aria-label='Personal Introduction'></Intro>
				<Projects></Projects>
				<Footer aria-label='Footer'></Footer>
			</Layout>
		</div>
	);
}
