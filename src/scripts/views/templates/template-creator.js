<<<<<<< HEAD
import Showingbooksitem from './showingbooksitem';
import Showingdetailitem from './showingdetailitem';

class template {
  static createBooksTemplate(books) {
    books.forEach((book) => {
      Showingbooksitem.showingbooksitem(book);
    });
  }

  static detailBooksTemplate(books) {
    Showingdetailitem.showingdetailitem(books);
  }
}

=======
import Showingbooksitem from './showingbooksitem';
import Showingdetailitem from './showingdetailitem';

class template {
  static createBooksTemplate(books) {
    books.forEach((book) => {
      Showingbooksitem.showingbooksitem(book);
    });
  }

  static detailBooksTemplate(books) {
    Showingdetailitem.showingdetailitem(books);
  }
}

>>>>>>> master
export default template;