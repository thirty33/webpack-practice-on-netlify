import sum from './utils/sum.js'
import Template from '@templates/template.js';
import './styles.css';
import '@styles/vars.styl';

(async function App() {
    const main = null || document.getElementById('main');
    main.innerHTML = await Template();
})();


