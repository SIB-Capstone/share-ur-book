<<<<<<< HEAD
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
    const books = await database.FavoriteBook.getBooksFav(id);
    return !!books;
  },

  _notifFav() {
    const btnFav = document.getElementById('favorite-button');
    btnFav.addEventListener('click', async () => {
      await database.FavoriteBook.putBooksFav(this._books);
      alert(`${this._books.title} added`);
      this._renderSectionButton();
    });
  },

  _notifNotFav() {
    const btnFav = document.getElementById('favorite-button');
    btnFav.addEventListener('click', async () => {
      alert(`${this._books.title} already added`);
    });
  },

};

=======
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
    const books = await database.FavoriteBook.getBooksFav(id);
    return !!books;
  },

  _notifFav() {
    const btnFav = document.getElementById('favorite-button');
    btnFav.addEventListener('click', async () => {
      await database.FavoriteBook.putBooksFav(this._books);
      alert(`${this._books.title} added`);
      this._renderSectionButton();
    });
  },

  _notifNotFav() {
    const btnFav = document.getElementById('favorite-button');
    btnFav.addEventListener('click', async () => {
      alert(`${this._books.title} already added`);
    });
  },

};

>>>>>>> master
export default addFavorite;