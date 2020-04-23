import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/js/bootstrap';
import './scss/saturn.scss';

import {
    BrowserRouter,
} from 'react-router-dom';

ReactDOM.render(<BrowserRouter forceRefresh={false} basename={'/'}><Routes /></BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
