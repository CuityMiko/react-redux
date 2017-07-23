import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Redux & Store
import { Provider } from 'react-redux'
import Store from './stores/'
// 引入Redux调试工具DevTools
import DevTools from './js/reduxDevtools.js'  

ReactDOM.render(
    <Provider store={ Store }>
        <div>
            <App />
            {/* <DevTools /> */}
        </div>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
