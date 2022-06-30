<<<<<<< HEAD
import database from '../data/book-idb';

class delFavorite {
  static deleteBooksFav(books) {
    const btnDelete = document.querySelectorAll('.deletebutton');
    btnDelete.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        database.FavoriteBook.deleteBooksFav(books.id);
        this._cekDataBase(books.id);
      });
    });
  }

  static _cekDataBase(id) {
    if (id === database.FavoriteBook.getBooksFav(id)) {
      alert('Books Failed to Delete');
    } else {
      alert('Books Has Been Deleted, Refresh It');
    }
  }
}

=======
import database from '../data/book-idb';

class delFavorite {
  static deleteBooksFav(books) {
    const btnDelete = document.querySelectorAll('.deletebutton');
    btnDelete.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        database.FavoriteBook.deleteBooksFav(books.id);
        this._cekDataBase(books.id);
      });
    });
  }

  static _cekDataBase(id) {
    if (id === database.FavoriteBook.getBooksFav(id)) {
      alert('Books Failed to Delete');
    } else {
      alert('Books Has Been Deleted, Refresh It');
    }
  }
}

>>>>>>> master
export default delFavorite;