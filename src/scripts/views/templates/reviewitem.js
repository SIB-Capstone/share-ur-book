class AddReview {
    static templateReview() {
        const itemReview = document.querySelector('#list-review');
        itemReview.innerHTML += `
        <div class="card card-review">
        <div class="card-body">
          <h5>Special title treatment</h5>
          <p>With supporting text below as a natural lead-in to additional content. lorp With supporting text below as a natural lead-in to additional content. lorpWith supporting text below as a natural lead-in to additional content. lorp</p>
          <div class="button-card">
          <a href="#" class="btn btn-primary">Edit Review</a>
          <a href="#" class="btn btn-primary">Delete Review</a>
          </div>
        </div>
        </div> 
      `;
    }



}

export default ProggresTamplte;