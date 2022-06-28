/* eslint-disable indent */
import css from 'bootstrap/dist/css/bootstrap.min.css';
import UrlParser from '../../routes/url-parser';
import detailBooks from '../../utils/detailBooks';
import addFavorite from '../../utils/add-fav';

const Detail = {
    async render() {
        return `
      <div id="detail">
      
      </div>
    `;
    },

    // eslint-disable-next-line no-empty-function
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const books = await detailBooks(url.id);
        this._addToFav(books);
    },

    _addToFav(books) {
        const { volumeInfo } = books;
        addFavorite.init({
            books: {
                id: books.id,
                title: volumeInfo.title,
                image: volumeInfo.imageLinks.thumbnail,
                author: volumeInfo.authors,
            },
        });
    },

};

export default Detail;