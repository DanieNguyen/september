import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { device } from '../components/device';

const theme = {
	colors: {
		primary: '#4f7ae8',
		text: '#353D45',
		gray: '#aeaeb2',
		lightgray: '#dfdfdf',
	},
};

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Basier';
        src: url('/static/fonts/basiersquare-regular-webfont.eot');
        src: url('/static/fonts/basiersquare-regular-webfont.eot?#iefix') format('embedded-opentype'),
             url('/static/fonts/basiersquare-regular-webfont.woff2') format('woff2'),
             url('/static/fonts/basiersquare-regular-webfont.woff') format('woff'),
             url('/static/fonts/basiersquare-regular-webfont.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        kerning: normal;
    }

    @font-face {
        font-family: 'Basier-Bold';
        src: url('/static/fonts/basiersquare-bold-webfont.eot');
        src: url('/static/fonts/basiersquare-bold-webfont.eot?#iefix') format('embedded-opentype'),
             url('/static/fonts/basiersquare-bold-webfont.woff2') format('woff2'),
             url('/static/fonts/basiersquare-bold-webfont.woff') format('woff'),
             url('/static/fonts/basiersquare-bold-webfont.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        kerning: normal;
    }

    @font-face {
        font-family: 'Basier-Medium';
        src: url('/static/fonts/basiersquare-medium-webfont.eot');
        src: url('/static/fonts/basiersquare-medium-webfont.eot?#iefix') format('embedded-opentype'),
             url('/static/fonts/basiersquare-medium-webfont.woff2') format('woff2'),
             url('/static/fonts/basiersquare-medium-webfont.woff') format('woff'),
             url('/static/fonts/basiersquare-medium-webfont.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        kerning: normal;
    }

    * {
        padding: 0;
        margin: 0;
    }
      
    body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        overflow-x: hidden;
    }
    
    h1, h2, h3, p, li, a {
        color: ${theme.colors.text};
        text-decoration: none;
    }   

    h2 {
        font-family: 'DM Serif Display';
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 48px;
        @media ${device.display} {
            font-size: 48px;
            line-height: 64px;
        };
    }

    p {
        font-family: 'Basier';
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.03rem;
    }
      
    ul,
    li {
        margin: 0;
        padding: 0;
    }
      
    .refresh {
        padding: 10px;
        position: absolute;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        width: 20px;
        height: 20px;
        top: 10px;
        right: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
      
`;

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		);
	}
}
