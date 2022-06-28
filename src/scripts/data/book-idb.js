import { openDB } from 'idb';
import CONFIG from '../globals/config';

const {
  DATABASE_NAME,
  DATABASE_VERSION,
  OBJECT_STORE_NAME,
  DATABASE_NAME_REV,
  DATABASE_VERSION_REV,
  OBJECT_STORE_NAME_REV,
} = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const dbPromiseRev = openDB(DATABASE_NAME_REV, DATABASE_VERSION_REV, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME_REV, { keyPath: 'idrev' });
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
  async addReviews(idrev) {
    return (await dbPromiseRev).add(OBJECT_STORE_NAME_REV, idrev);
  },
  async getReviews(idrev) {
    return (await dbPromiseRev).get(OBJECT_STORE_NAME_REV, idrev);
  },
  async getAllReviews() {
    return (await dbPromiseRev).getAll(OBJECT_STORE_NAME_REV);
  },
  async putReviews(review) {
    return (await dbPromiseRev).put(OBJECT_STORE_NAME_REV, review);
  },
  async deleteReviews(idrev) {
    return (await dbPromiseRev).delete(OBJECT_STORE_NAME_REV, idrev);
  },
};

export default { FavoriteBook, ReviewBook };