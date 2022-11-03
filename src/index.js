// import sum from './utils/sum.js'
// import Template from '@templates/template.js';
// import './styles.css';
// import '@styles/vars.styl';

// (async function App() {
//     const main = null || document.getElementById('main');
//     main.innerHTML = await Template();
// })();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import '@styles/global.scss'
import '@styles/vars.styl';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





