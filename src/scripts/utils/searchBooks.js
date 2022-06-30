import apiEndpoint from '../globals/api-endpoint';
import templateBooks from '../views/templates/template-creator';

const renderBooks = (items) => {
    document.querySelector('#list-book').innerHTML = '';
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
    const notFound = document.querySelector('#booknotfoundhome');
    const query = document.querySelector('#searchBookInput').value;
    BooksAPIReq(query);
    if (notFound.style.display === 'none') {
        notFound.style.display = 'block';
    } else {
        notFound.style.display = 'none';
    }
};

export default searchElement;