import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
  menu: document.querySelector('#menu-button'),
  jumbotron: document.querySelector('.jumbotron'),
  main: document.querySelector('main'),
  navmobile: document.querySelector('.navbar-mobile-view'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});