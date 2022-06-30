const DrawerInitiator = {
  init({ menu, main, navmobile }) {
    menu.addEventListener('click', (event) => {
      this._toggleDrawer(event, navmobile);
    });

    main.addEventListener('click', (event) => {
      this._closeDrawer(event, navmobile);
    });
  },

  _toggleDrawer(event, navmobile) {
    event.stopPropagation();
    navmobile.classList.toggle('open');
  },

  _closeDrawer(event, navmobile) {
    event.stopPropagation();
    navmobile.classList.remove('open');
  },
};

export default DrawerInitiator;