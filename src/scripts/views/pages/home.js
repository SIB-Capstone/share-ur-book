import css from 'bootstrap/dist/css/bootstrap.min.css';
import ilustration from '../../../public/images/heros/bibliophile-animate.svg';
import searchicon from '../../../public/icons/search-icon.svg';
import searchElement from '../../utils/searchBooks';
import notfoundilustration from '../../../public/images/heros/notfound-books.svg';

const Home = {
    async render() {
        return `

        <!-- ini jumbotron hero section  -->
        <div class="jumbotron">
          <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div class="col-10 col-sm-8 col-lg-6 ilustrator">
                <img src="${ilustration}" class="d-block mx-lg-auto" alt="Bootstrap Themes" loading="lazy">
              </div>
              <div class="col-lg-6 mb-lg-5 mr-3">
                <p class="fw-bold">HEY THERE,</p>
                <h1 class="display-4 fw-bold lh-1 mb-3">LETS SEE THE WORLD WITH OUR BOOKS</h1>
                <p class="lead">"Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers." ― Charles W. Eliot</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" class="btn btn-outline-secondary btn-lg px-5 rounded-5">Search For a Books Now!</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ini title section dan search  -->
        <section>
        <div class="title-book">
            <h2>Find Books Here</h2>
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
          <div class="list-book" id="list-book">

          <!-- template bookcard dan detail -->
            <div class="booksItem">
            <div class="cardBook">
                <h3 class="bookTitle">Paradigma</h3>
                <span class="author">Syahid Muhammad</span>
                <p class="description"><button type="button" class="detail-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                See Details ..</button></p>
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
          <!-- akhir template bookcard dan detail -->
          </div>
          <div class="booknotfound">
          <img src="${notfoundilustration}" alt="">
          <h3>Books not found, search now again ...</h3>
          </div>
        </div>
    </section>

 


  
      `;
    },

    async afterRender() {
        document.querySelector('#buttonSearchBook').addEventListener('click', searchElement);
    },
};

export default Home;

// template sementara, masih bisa dirubah ubah