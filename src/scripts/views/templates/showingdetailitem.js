/* eslint-disable indent */
class Showingdetailitem {
    static showingdetailitem(books) {
        const { volumeInfo } = books;
        this._templateBooks(volumeInfo);
    }

    static _templateBooks(volumeInfo) {
        const {
            title = 'title',
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
            <img src="${volumeInfo?.imageLinks.thumbnail}"/>
            </div>
            <div class="col-lg-6 col-sm-12" id="detailBook">
            <h5>${volumeInfo?.title}</h5>
            <p>${volumeInfo?.authors}</p>
            <span>Published by ${volumeInfo?.publisher}<span>
            <p>${volumeInfo?.description}</p>
            </div>
        </div>
       </div>
        `;
    }
}

export default Showingdetailitem;

// codingan sementara. belum jalan