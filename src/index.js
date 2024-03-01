import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reducer from '../src/store/reducer';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
    <App />
    </Provider>
);
