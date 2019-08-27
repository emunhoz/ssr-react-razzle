import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import { AfterRoot, AfterData } from '@jaredpalmer/after'

class CustomDocument extends React.Component {
  static async getInitialProps ({ assets, data, renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = await renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { assets, data, ...page, styleTags }
  }

  render () {
    const { helmet, assets, data, styleTags } = this.props

    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent()
    const bodyAttrs = helmet.bodyAttributes.toComponent()
    return (
      <html {...htmlAttrs}>
        <head>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta charSet='utf-8' />
          <title>SSR React Razzle with Redux and After.js</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {assets.client.css && (
            <link rel='stylesheet' href={assets.client.css} />
          )}
          {styleTags}
        </head>
        <body {...bodyAttrs}>
          <AfterRoot />
          <AfterData data={data} />
          {process.env.NODE_ENV === 'production' ? (
            <span
              dangerouslySetInnerHTML={{
                __html: `<script src="${assets.client.js}" defer></script>`
              }}
            />
          ) : (
            <span
              dangerouslySetInnerHTML={
                { __html: `<script src="${assets.client.js}" defer crossorigin></script>` } // prettier-ignore
              }
            />
          )}
        </body>
      </html>
    )
  }
}

export default CustomDocument
