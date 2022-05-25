import DrawerInitiator from '../utils/drawer-initiator';

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

}

export default App;