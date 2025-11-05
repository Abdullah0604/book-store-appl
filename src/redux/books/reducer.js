import { ADD_BOOK, DELETE_BOOK, LOADED_BOOKS } from "./actionsType";

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case LOADED_BOOKS:
      return action.payload;
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case ADD_BOOK:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};

export default bookReducer;
