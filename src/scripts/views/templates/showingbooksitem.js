/* eslint-disable indent */
class Showingbooksitem {
    static showingbooksitem(book) {
        const { volumeInfo } = book;
        this._templateBooks(book, volumeInfo);
    }

    static _templateBooks(book, volumeInfo) {
            const {
                title,
                authors,
                imageLinks,
            } = volumeInfo;
            document.querySelector('#list-book').innerHTML += `
        <div class="booksItem">
        <img src="${imageLinks.thumbnail}" alt="books">
        <div class="cardBook">
            <h9 class="bookTitle">${title}</h9>
            <span class="author">${authors}</span>
            <p class="description"><a href="${`/#/detail/${book.id}`}"> See Details</a></p>
        </div>
    </div>
        `;
  }
}

export default Showingbooksitem;

// codingan sementara. belum jalan