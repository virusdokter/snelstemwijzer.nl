import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="nl">
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <title>SnelStemwijzer</title>
          <script
            type="text/javascript"
            src="https://platform-api.sharethis.com/js/sharethis.js#property=603ea06451f70600114ff1aa&product=inline-share-buttons"
            async
          ></script>
        </Head>
        <body className="min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
