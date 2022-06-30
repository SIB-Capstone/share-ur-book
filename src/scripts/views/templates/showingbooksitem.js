class Showingbooksitem {
    static showingbooksitem(book) {
        const { volumeInfo } = book;
        this._templateBooks(book, volumeInfo);
    }

    static _templateBooks(book, volumeInfo) {
        const {
            title,
            authors,
        } = volumeInfo;
        document.querySelector('#list-book').innerHTML += `
            <div class="booksItem">
            <div class="cardBook">
                <h3 class="bookTitle">Paradigma</h3>
                <span class="author">Syahid Muhammad</span>
                <p class="description"><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                See Detail ..
              </button></p>
            </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"> 
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Books Detail</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body detail-books">
                <img src="./images/logo/book_example.png" alt="">
                <h3>Paradigma</h3>
                <span class="author">Syahid Muhammad</span>
                <span class="author">Published by Gradien Mediatama</span>
                <p>lorem ipsum dolor sit amum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, necessitatibus quo repellat ipsum fuga dolorum facere delectus totam veritatis reiciendis iure modi vel nemo ipsa ipsam assumenda quae, culpa officia?</p>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Add To Favorite</button>
                </div>
                </div>
            </div>
            </div>
        `;
    }
}

export default Showingbooksitem;

// codingan sementara. belum jalan