import NextDocument, { Html, Head, Main, NextScript } from 'next/document'


export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head >
        </Head>
        <body style={{margin:0}}>
          {/* Make Color mode to persists when you refresh the page. */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}