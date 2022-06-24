import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteBook = {
  async addBooksFav(id) {
    return (await dbPromise).add(OBJECT_STORE_NAME, id);
  },
  async getBooksFav(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllBooksFav() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putBooksFav(books) {
    return (await dbPromise).put(OBJECT_STORE_NAME, books);
  },
  async deleteBooksFav(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

const ReviewBook = {
  async addReviews(id) {
    return (await dbPromise).add(OBJECT_STORE_NAME, id);
  },
  async getReviews(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllReviews() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putReviews(books) {
    return (await dbPromise).put(OBJECT_STORE_NAME, books);
  },
  async deleteReviews(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteBook;