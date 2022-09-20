const ADD_BOOK = 'src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'src/redux/books/REMOVE_BOOK';
const initialState = [];

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          category: action.category,
          id: action.id,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

// Action Creators
export const addBook = (
  title = 'Understanding Redux',
  author = 'Promise',
  category = 'Action',
  id,
) => ({
  type: ADD_BOOK,
  title,
  author,
  category,
  id,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default booksReducer;
