import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Fragment } from 'react';
import { GA_TRACKING_ID } from '../components/lib/gtag';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);

			// Check if in production
			const isProduction = process.env.NODE_ENV === 'production';

			return {
				...initialProps,
				isProduction,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		const { isProduction } = this.props;

		return (
			<Html lang='en'>
				<Head>
					<link
						href='https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap'
						rel='stylesheet'
					/>

					{/* We only want to add the scripts if in production */}
					{isProduction && (
						<Fragment>
							{/* Global Site Tag (gtag.js) - Google Analytics */}
							<script
								async
								src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
							/>
							<script
								dangerouslySetInnerHTML={{
									__html: `
									window.dataLayer = window.dataLayer || [];
									function gtag(){dataLayer.push(arguments);}
									gtag('js', new Date());

									gtag('config', '${GA_TRACKING_ID}', {
									page_path: window.location.pathname,
									});
								`,
								}}
							/>
						</Fragment>
					)}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
