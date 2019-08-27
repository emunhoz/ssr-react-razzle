import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './ducks'

const configureStore = preloadedState => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./ducks', () => {
      const nextRootReducer = require('./ducks').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
