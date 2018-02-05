import React from 'react';
import ReactDOM from 'react-dom';
import 'foundation-sites/dist/css/foundation.css';
import App from './components/App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('app'));
registerServiceWorker();
