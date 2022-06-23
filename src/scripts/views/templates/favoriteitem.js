import css from 'bootstrap/dist/css/bootstrap.min.css';
import deleteicon from '../../../public/icons/delete.svg';

class AddFav {
  static templateFavorite(books) {
    const {
      id,
      title,
      author,
      image,
    } = books;
    const itemFavorite = document.querySelector('#list-book-fav');
    itemFavorite.innerHTML += `
    <div class="booksItem">
        <img src="${image}" alt="books">
        <div class="cardBook">
            <p hidden>${id}</p>
            <h9 class="bookTitle">${title}</h9>
            <span class="author">${author}</span>
            <p class="description"><button type="button" id="detailbutton" autofocus><a href="${`/#/detail/${id}`}"> See Details</a></button> <button class="deletebutton" id="deletebutton"><i class="bi bi-trash fa-5x"></i><button> </p>
            

        </div>
    </div>`;
  }
}

export default AddFav;