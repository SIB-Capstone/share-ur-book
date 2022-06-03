import API_ENDPOINT from '../globals/api-endpoint';

class BookSource {
  static async listBooks() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.books;
  }

  static async detailBook(id) {
    // eslint-disable-next-line new-cap
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.book;
  }
}

export default BookSource;
