import Showingbooksitem from "./showingBooksItem";

class template {
    static createBooksTemplate(books) {
        books.forEach((book) => {
            Showingbooksitem.showingbooksitem(book);
        });
    }
}


export default template;

// codingan sementara. belum jalan