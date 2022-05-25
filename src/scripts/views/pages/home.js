import css from 'bootstrap/dist/css/bootstrap.min.css';
import ilustration from '../../../public/images/heros/bibliophile-animate.svg';

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
        <h1 class="display-5 fw-bold lh-1 mb-3">LEST SEE THE WORLD WITH OUR BOOK</h1>
        <p class="lead">"I love books. I adore everything about them. I love the feel of the pages on my fingertips. They are light enough to carry, yet so heavy with worlds and ideas. I love the sound of the pages flicking against my fingers. Print against fingerprints. Books make people quiet, yet they are so loud."</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
  </div>
  
      `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
    },
};

export default Home;