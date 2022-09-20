import { configureStore } from "@reduxjs/toolkit";
import reduceBooks from "./books/books";
import reduceCategories from "./categories/categories";

const store = configureStore({
  reducer: {
    books: reduceBooks,
    categories: reduceCategories,
  },
});

export default store;
