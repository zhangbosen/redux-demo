import React from 'react';
import ReactDOM from 'react-dom';
//从react-redux中引入Provider, 提供一个全局的上下文环境context, 并把store放在context对象中
import { Provider } from 'react-redux';

//引入唯一的store
import store from './store';



import './index.css';
import CounterPanel from './views/CounterPanel';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <CounterPanel />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
