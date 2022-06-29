import css from 'bootstrap/dist/css/bootstrap.min.css';
import database from '../../data/book-idb';
import notfoundrevilustration from '../../../public/images/heros/notfound-review.svg';
import addReview from '../../utils/add-review';
import AddReviewItem from '../templates/reviewitem';
import DelReview from '../../utils/delete-review';

const Reviews = {
  async render() {
    return `
        <div class="title-book-fav">
            <h2>BOOKS REVIEWS</h2>
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
                            <form id="inputReview">
                            <div class="modal-body detail-books">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="userInput" placeholder="name@example.com" required>
                                    <label for="floatingInput">Username</label>
                                </div>
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="titleInput" placeholder="Password" required>
                                    <label for="floatingPassword">Books Title</label>
                                </div>
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="reviewInput" style="height: 100px" required></textarea>
                                    <label for="floatingTextarea2">Your Review</label>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary" id="submitreview">Add Review</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="list-review" id="list-review">
        
        </div>
      <div class="booknotfound" id="booknotfound">
      <img src="${notfoundrevilustration}" alt="">
      <h3>Reviews book not found ...</h3>
      
  </div>
      `;
  },

  async afterRender() {
    const inputContactForm = document.querySelector('#inputReview');
        inputContactForm.addEventListener('submit', async(e) => { // eslint-disable-line
      e.preventDefault();
      const inputName = document.querySelector('#userInput');
      const inputTitle = document.querySelector('#titleInput');
      const inputReviewUser = document.querySelector('#reviewInput');
      addReview.init({
        review: {
          idrev: new Date().valueOf().toString(),
          username: inputName.value,
          titlebook: inputTitle.value,
          reviewbooktext: inputReviewUser.value,
        },
      });
    });

    const review = await database.ReviewBook.getAllReviews();
    review.forEach((rev) => {
      AddReviewItem.templateReview(rev);
      DelReview.deleteBooksRev(rev);
      const notFound = document.querySelector('#booknotfound');
      if (notFound.style.display === 'none') {
        notFound.style.display = 'block';
      } else {
        notFound.style.display = 'none';
      }
    });
  },
  _addToFav() {
    const inputName = document.querySelector('#userInput');
    const inputTitle = document.querySelector('#titleInput');
    const inputReviewUser = document.querySelector('#reviewInput');
    addFavorite.init({
      review: {
        idrev: new Date().valueOf().toString(),
        username: inputName.value,
        titlebook: inputTitle.value,
        reviewbooktext: inputReviewUser.value,
      },
    });
  },
};

export default Reviews;