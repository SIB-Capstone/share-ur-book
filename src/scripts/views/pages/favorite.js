import css from 'bootstrap/dist/css/bootstrap.min.css';
import ilustration from '../../../public/images/heros/bibliophile-animate.svg';
import searchicon from '../../../public/icons/search-icon.svg';
import notfoundfavilustration from '../../../public/images/heros/notfound-fav.svg';

const Favorite = {
  async render() {
    return `
        <div class="title-book-fav">
            <h2>FAVORITE BOOK LIST</h2>
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
            
          </div>
          <div class="booknotfound">
          <img src="${notfoundfavilustration}" alt="">
          <h3>Favorite book not found ...</h3>
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favorite;