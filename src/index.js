import 'normalize.css';
import './sass/style.scss';
import { appendInitialDOMElements } from './modules/init.js';
import { insertHomeContent } from './modules/home.js';

appendInitialDOMElements();
insertHomeContent();
