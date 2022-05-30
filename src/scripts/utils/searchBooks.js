import apiEndpoint from '../globals/api-endpoint';
import templateBooks from '../views/templates/template-creator';

const searchBookQuery = document.querySelector('#searchBookInput');
const booksSection = document.querySelector('#list-book');

const renderBooks = (items) => {
    booksSection.innerHTML = '';

    templateBooks.createBooksTemplate(items);
};

const BooksAPIReq = async(query) => {
    const API_ENDPOINT = apiEndpoint.api_endpoint(query);

    const response = await fetch(API_ENDPOINT);
    const responseJson = await response.json();
    const { items } = responseJson;
    renderBooks(items);
};

const searchElement = async(event) => {
    event.preventDefault();
    const query = searchBookQuery.value;
    BooksAPIReq(query);
};

export default searchElement;

// codingan sementara. belum jalan