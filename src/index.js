import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import RootReducer from './reducers/index'
import { applyMiddleware } from 'redux';

// Logger with default options
import logger from 'redux-logger'
const store = createStore(
  RootReducer,
  applyMiddleware(logger)
)



const Render = document.getElementById('root');
 
render(
    <Provider store={store}>
   <App />
   </Provider> , Render
)
