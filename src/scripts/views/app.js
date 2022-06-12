import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    menu,
    jumbotron,
    main,
    navmobile,
  }) {
    this._menu = menu;
    this._jumbotron = jumbotron;
    this._main = main;
    this._navmobile = navmobile;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      menu: this._menu,
      main: this._main,
      navmobile: this._navmobile,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._main.innerHTML = await page.render();
    await page.afterRender();
  }
}
const skipLinkElem = document.querySelector('.link-skip');
skipLinkElem.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#main-content').focus();
});

export default App;