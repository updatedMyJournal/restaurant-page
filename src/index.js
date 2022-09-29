import 'normalize.css';
import './sass/style.scss';
import { appendInitialDOMElements } from './modules/init.js';
import { insertHomeContent } from './modules/home.js';
import { insertMenuContent } from './modules/menu.js';

appendInitialDOMElements();
insertHomeContent();