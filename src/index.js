import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Redux & Store
import { Provider } from 'react-redux'
import Store from './stores/'

ReactDOM.render(
    <Provider store={ Store }>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
