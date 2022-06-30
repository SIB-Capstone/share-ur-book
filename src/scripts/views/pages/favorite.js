import css from 'bootstrap/dist/css/bootstrap.min.css';
import notfoundfavilustration from '../../../public/images/heros/notfound-fav.svg';
import database from '../../data/book-idb';
import AddFav from '../templates/favoriteitem';
import delFavorite from '../../utils/delete-fav';

const Favorite = {
    async render() {
        return `
        <div class="title-book-fav" >
            <h2>FAVORITE BOOK LIST</h2>
        </div>
        <div class="list-book-fav" id="list-book-fav">
        </div>

        <div class="booknotfound" id="booknotfound">
        <img src="${notfoundfavilustration}" alt=""> 
        <h3>Favorite book not found ...</h3>
        </div>
        
      `;
    },

    async afterRender() {
        const books = await database.FavoriteBook.getAllBooksFav();
        books.forEach((book) => {
            const notFound = document.querySelector('#booknotfound');
            if (notFound.style.display === 'none') {
                notFound.style.display = 'block';
            } else {
                notFound.style.display = 'none';
            }
            AddFav.templateFavorite(book);
            delFavorite.deleteBooksFav(book);
        });
    },

};

export default Favorite;