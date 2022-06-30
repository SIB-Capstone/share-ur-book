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
            <p class="description"><button type="button" id="detailbutton" autofocus><a href="${`/#/detail/${book.id}`}"> See Details</a></button> </p>
        </div>
    </div>
        `;
  }
}

export default Showingbooksitem;