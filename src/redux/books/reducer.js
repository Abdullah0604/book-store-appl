import {
  ADD_BOOK,
  DELETE_BOOK,
  LOADED_BOOKS,
  UPDATE_BOOK,
} from "./actionsType";

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case LOADED_BOOKS:
      return action.payload;
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case ADD_BOOK:
      return [...state, { ...action.payload }];
    case UPDATE_BOOK:
      return state.map((book) => {
        if (book.id === action.payload.bookID)
          return { ...action.payload.updatedData };
        return book;
      });

    default:
      return state;
  }
};

export default bookReducer;
