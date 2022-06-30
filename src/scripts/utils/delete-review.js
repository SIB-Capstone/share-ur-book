import database from '../data/book-idb';

class delReview {
    static deleteBooksRev(review) {
        const btnDelete = document.querySelectorAll('.deletebutton');
        btnDelete.forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                database.ReviewBook.deleteReviews(review.idrev);
                this._cekDataBase(review.idrev);
            });
        });
    }

    static _cekDataBase(idrev) {
        if (idrev === database.ReviewBook.getReviews(idrev)) {
            alert('Review Failed to Delete');
        } else {
            alert('Review Has Been Deleted, Refresh It');
        }
    }
}

export default delReview;