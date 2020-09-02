import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import reducers from './reducers'
import middleware from './middleware'
import 'semantic-ui-css/semantic.min.css'

const store = createStore(reducers , middleware)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
