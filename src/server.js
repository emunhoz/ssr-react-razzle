import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import express from 'express'
import { render } from '@jaredpalmer/after'
import configureStore from './store'
import routes from './routes'
import Html from './pages'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)
const server = express()

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    try {
      const preloadedState = {}
      const store = configureStore(preloadedState)
      const serverState = store.getState()

      const customRenderer = node => {
        const App = <Provider store={store}>{node}</Provider>
        return {
          html: renderToString(App),
          serverState
        }
      }

      const html = await render({
        req,
        res,
        routes,
        assets,
        document: Html,
        customRenderer
      })
      res.send(html)
    } catch (error) {
      console.log(error)
      res.json(error)
    }
  })

export default server
