/* eslint-disable indent */
class Showingdetailitem {
    static showingdetailitem(books) {
        const { volumeInfo } = books;
        this._templateBooks(volumeInfo);
    }

    static _templateBooks(volumeInfo) {
        const {
            title,
            authors,
            publisher,
            imageLinks,
            description,
        } = volumeInfo || {};
        const SectionDetail = document.querySelector('#detail');
        SectionDetail.innerHTML = '';
        SectionDetail.innerHTML += `
        <div class="container detail-card">
        <div class="row">
            <div class="col-lg-6 col-sm-12" id="imageBook">
            <img src="${imageLinks.thumbnail}"/>
            </div>
            <div class="col-lg-6 col-sm-12" id="detailBook">
            <h5>${title}</h5>
            <p>${authors}</p>
            <span>Published by ${publisher}<span>
            <p>${description}</p>
            </div>
        </div>
       </div>
        `;
    }
}

export default Showingdetailitem;

// codingan sementara. belum jalan