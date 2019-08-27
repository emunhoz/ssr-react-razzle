import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme'
import { Provider } from 'react-redux'
import configureStore from './store'
import { BrowserRouter } from 'react-router-dom'
import { ensureReady, After } from '@jaredpalmer/after'
import GlobalStyle from './styles/GlobalStyle'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import routes from './routes'

const store = configureStore(window.__PRELOADED_STATE__)

ensureReady(routes).then(data =>
  renderMethod(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <GlobalStyle />
          <Header />
          <main>
            <After data={data} routes={routes} />
          </main>
          <Footer />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
  )
)

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
