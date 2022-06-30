import database from '../data/book-idb';

const addReview = {
    async init({ review }) {
        this._review = review;
        await this._renderSectionButton();
    },

    async _renderSectionButton() {
        const { idrev } = this._review;
        if (await this._isBooksFound(idrev)) {
            this._notifNotFav();
        } else {
            this._notifFav();
        }
    },

    async _isBooksFound(idrev) {
        const review = await database.ReviewBook.getReviews(idrev);
        return !!review;
    },

    _notifFav() {
        const btnFav = document.getElementById('submitreview');
        btnFav.addEventListener('click', async() => {
            await database.ReviewBook.addReviews(this._review);
            alert('Review added, refresh it');
            this._renderSectionButton();
        });
    },

    _notifNotFav() {
        const btnFav = document.getElementById('submitreview');
        btnFav.addEventListener('click', async() => {
            alert('already added');
        });
    },

};

export default addReview;