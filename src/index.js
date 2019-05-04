import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './containers/App.css';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchPeople } from './reducers';
import 'tachyons';

const store = createStore(searchPeople)

ReactDOM.render(
                <Provider store={store}>
                  <App />
                </Provider>
                ,document.getElementById('root'));
serviceWorker.register();
