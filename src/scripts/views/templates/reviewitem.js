class AddReview {
  static templateReview(review) {
    const {
      idrev, username, titlebook, reviewbooktext,
    } = review;
    const itemReview = document.querySelector('#list-review');
    itemReview.innerHTML += `
        <div class="card card-review">
        <div class="card-body">
        <p hidden>${idrev}</p>
          <h5 id="username">${username}</h5> 
          <h4 id="title">${titlebook}</h4>
          <p id="review">${reviewbooktext}</p>
          <div class="button-card">
          <a href="#" class="btn btn-primary">Edit Review</a>
          <a href="#" class="btn btn-primary">Delete Review</a>
          </div>
        </div>
        </div> 
      `;
  }
}

export default AddReview;