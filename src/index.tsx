import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import './index.css'
import store from './store'
import {loadUser} from "./store/sagas/actions";
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>

    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

store.dispatch(loadUser('U10000'))
reportWebVitals();
