import database from '../data/book-idb';

const addFavorite = {
  async init({ books }) {
    this._books = books;
    await this._renderSectionButton();
  },

  async _renderSectionButton() {
    const { id } = this._books;
    if (await this._isBooksFound(id)) {
      this._notifNotFav();
    } else {
      this._notifFav();
    }
  },

  async _isBooksFound(id) {
    const books = await database.getBooksFav(id);
    return !!books;
  },

  _notifFav() {
    const btnFav = document.getElementById('favorite-button');
    btnFav.addEventListener('click', async () => {
      await database.putBooksFav(this._books);
      alert(`books added: ${this._books.title}`);
      this._renderSectionButton();
    });
  },

  _notifNotFav() {
    const btnFav = document.getElementById('favorite-button');
    btnFav.addEventListener('click', async () => {
      alert(`books already added ... : ${this._books.title}"`);
    });
  },

};

export default addFavorite;