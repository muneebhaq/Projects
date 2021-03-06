import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'
import React from 'react'
const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
document.getElementById('root')
);
// npm i redux-devtools-extension