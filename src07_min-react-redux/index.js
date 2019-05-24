/*
入口js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from './lib/react-redux'

import App from './containers/App'
import store from './redux/store'

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'))

