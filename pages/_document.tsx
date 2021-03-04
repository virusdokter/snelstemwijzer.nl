import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="nl">
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <title>SnelStemwijzer</title>
          <meta
            property="og:image"
            content="/snelstemwijzer-social-share.jpg"
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Head>
        <body className="min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
