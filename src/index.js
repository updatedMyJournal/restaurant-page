import 'normalize.css';
import './sass/style.scss';
import { appendInitialDOMElements } from './modules/init.js';
import { insertHomeContent } from './modules/home.js';
import { insertMenuContent } from './modules/menu.js';
import { insertContactContent } from './modules/contact.js';

appendInitialDOMElements();
insertHomeContent();

const buttonsContainer = document.querySelector('nav');
const homeButton = document.querySelector('nav .home');

selectButton(homeButton);

buttonsContainer.onclick = (e) => {
  const clickedButton = e.target.closest('button');

  if (!clickedButton || clickedButton.classList.contains('selected')) return;

  selectButton(clickedButton);

  const buttonClass = Object.values(clickedButton.classList).at(0);

  switch(buttonClass) {
    case 'home':
      insertHomeContent();
      break;
    case 'menu':
      insertMenuContent();
      break;
    case 'contact':
      insertContactContent();
      break;
  }

  scrollTo(0, 0);
};

function selectButton(button) {
  deSelectOtherButtons();
  button.classList.add('selected');
}

function deSelectOtherButtons() {
  buttonsContainer
    .querySelectorAll('button')
    .forEach((button) => button.classList.remove('selected'));
}
