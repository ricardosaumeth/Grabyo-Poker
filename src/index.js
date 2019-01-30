import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/global.css';
import App from './Components/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './store/reducer';

const store = createStore(reducer);

const app = (
    <Provider store={store}>
      <App />
    </Provider>
)

ReactDOM.render( app, document.getElementById( 'root' ) );
