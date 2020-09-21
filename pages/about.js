import Head from 'next/head';
import Nav from '../components/navigation/navbar';
import Intro from '../components/homepage/intro';
import Projects from '../components/projects/projects';
import Layout from '../components/layout';
import Footer from '../components/homepage/footer';

export default function Home() {
	return (
		<div>
			<Head></Head>
			<Nav></Nav>
			<Layout>
				<Intro></Intro>
				<Projects></Projects>
				<Footer></Footer>
			</Layout>
		</div>
	);
}
