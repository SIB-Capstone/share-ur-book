import css from 'bootstrap/dist/css/bootstrap.min.css';
import database from '../../data/book-idb';
import searchicon from '../../../public/icons/search-icon.svg';
import notfoundrevilustration from '../../../public/images/heros/notfound-review.svg';
import addReview from '../../utils/add-review';
import AddReviewItem from '../templates/reviewitem';

const Reviews = {
    async render() {
        return `
        <div class="title-book-fav">
            <h2>BOOKS REVIEWS</h2>
            <div class="searchbar">
                <form novalidate="novalidate" onsubmit="return false;" class="searchbox sbx-custom" id="searchBookForm">
                    <div role="search">
                        <input type="text" name="search" placeholder="Fill with the title of the book or author ..." autocomplete="off" required="required" class="sbx-custom__input" id="searchBookInput"></input>
                        <button type="submit" title="Search Book Now" class="sbx-custom__submit" id="buttonSearchBook">
                <svg role="img" aria-label="Search">
                    <use xlink:href="${searchicon}#sbx-icon-search-5"></use>
                </svg>
                </button>
                        <button type="reset" title="Deleted" class="sbx-custom__reset">
                <svg role="img" aria-label="Reset">
                    <use xlink:href="${searchicon}#sbx-icon-clear-4"></use> 
                </svg>
                    </div>
                </form>
            </div>
            <button class="button-review" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Your Reviews Now
            </button>
            <div class="form-review">
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"> 
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Books Reviews</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body detail-books">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Username</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Books Title</label>
                        </div>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                            <label for="floatingTextarea2">Your Review</label>
                        </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Add Review</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div class="booknotfound">
      <img src="${notfoundrevilustration}" alt="">
      <h3>Favorite book not found ...</h3>
      
  </div>
      `;
    },

    async afterRender() {
        // const DBOpenRequest = window.indexedDB.open('reviewtest', 4);
        // db = DBOpenRequest.result;
        // const objectStore = db.createObjectStore('reviewtest', { keyPath: 'idreview' });
    },

    // let db;
    // init();

    // async function init() {
    //     db = await idb.openDB('booksReviewDb', 1, (db) => {
    //         db.createObjectStore('booksReview', { keyPath: 'idreview' });
    //     });

    //     list();
    // }

    // async function list() {
    //     const tx = db.transaction('booksReview');
    //     const bookReview = tx.objectStore('booksReview');
    //     const booksReview = await bookReview.getAll();

    //     if (booksReview.length) {
    //         listreview.innerHTML = booksReview.map((review) => `
    // <div class="card card-review">
    // <div class="card-body">
    // <p hidden></p>
    //   <h5 id="username">${review.username}</h5>
    //   <h4 id="title">${review.titlebook}</h4>
    //   <p id="review">${review.reviewbooktext}</p>
    //   <div class="button-card">
    //   <a href="#" class="btn btn-primary">Edit Review</a>
    //   <a href="#" class="btn btn-primary">Delete Review</a>
    //   </div>
    // </div>
    // </div>
    // `).join('');
    //     } else {
    //         listreview.innerHTML = `
    // <div class="booknotfound">
    // <img src="${notfoundrevilustration}" alt="">
    // <h3>Favorite book not found ...</h3>`;
    //     }
    // }

    // document.addEventListener('DOMContentLoaded', () => {
    //     document.querySelector('submitbutton').addEventListener('click', (event) => {
    //         const username = document.getElementById('username').value;
    //         const titlebook = document.getElementById('title').value;
    //         const reviewbooktext = document.getElementById('review').value;
    //         const tx = db.transaction('booksReview', 'readwrite');
    //         event.preventDefault();
    //         tx.objectStore('booksReview').add({ username, titlebook, reviewbooktext });
    //         list();
    //     });
    // });

    // async function addRev() {
    //     const username = document.getElementById('username').value;
    //     const titlebook = document.getElementById('title').value;
    //     const reviewbooktext = document.getElementById('review').value;
    //     const tx = db.transaction('booksReview', 'readwrite');

    //     try {
    //         await tx.objectStore('booksReview').add({ username, titlebook, reviewbooktext });
    //         await list();
    //     } catch (err) {
    //         if (err.name == 'ConstraintError') {
    //             alert('Such review exists already');
    //             await addRev();
    //         } else {
    //             throw err;
    //         }
    //     }
    // }

};

export default Reviews;