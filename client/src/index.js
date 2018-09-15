import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap';
import './scss/saturn.scss';

import {
    HashRouter,
} from 'react-router-dom';

ReactDOM.render(<HashRouter><Routes /></HashRouter>, document.getElementById('root'));

registerServiceWorker();
