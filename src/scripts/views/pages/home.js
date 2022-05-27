import css from 'bootstrap/dist/css/bootstrap.min.css';
import ilustration from '../../../public/images/heros/bibliophile-animate.svg';
import searchicon from '../../../public/icons/search-icon.svg';

const Home = {
    async render() {
        return `
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

  <section>
  <div class="title-book">
    <h2>Find Books Here</h2>
    <div class="list-book" id="list-book">
    </div>
  </div>
  <div class="searchbar">
    <form novalidate="novalidate" onsubmit="return false;" class="searchbox sbx-custom" id="searchBookForm">
      <div role="search">
        <input type="search" name="search" placeholder="Search your website" autocomplete="off" required="required" class="sbx-custom__input" id="searchBookInput">
        <button type="submit" title="Submit your search query." class="sbx-custom__submit">
        <svg role="img" aria-label="Search">
          <use xlink:href="${searchicon}#sbx-icon-search-5"></use>
        </svg>
        </button>
          <button type="reset" title="Clear the search query." class="sbx-custom__reset">
          <svg role="img" aria-label="Reset">
            <use xlink:href="${searchicon}#sbx-icon-clear-4"></use>
          </svg>  
  </form>
</div>
</section>
  
      `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
    },
};

export default Home;