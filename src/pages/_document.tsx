import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { theme } from '../styles/theme';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
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
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="shortcut icon" href="favicon.svg" />
          <meta name="theme-color" content={theme.colors.primaryColor} />

          <meta property="og:title" content="Landing Page" />
          <meta
            property="og:description"
            content="Projeto curso react-js landing page utilizando next js"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/daf80beuu/image/upload/v1626352908/landing_page_2_243f3e7fdf.svg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
