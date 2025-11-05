import {
  ADD_BOOK,
  DELETE_BOOK,
  FEATURED_BOOKS,
  LOADED_BOOKS,
  SEARCH_BOOKS,
  UPDATE_BOOK,
} from "./actionsType";

export const loaded = (books) => {
  return {
    type: LOADED_BOOKS,
    payload: books,
  };
};
export const added = (bookData) => {
  return {
    type: ADD_BOOK,
    payload: {
      ...bookData,
    },
  };
};

export const deleted = (bookID) => {
  return {
    type: DELETE_BOOK,
    payload: bookID,
  };
};
export const updated = (bookID, updatedData) => {
  return {
    type: UPDATE_BOOK,
    payload: {
      bookID,
      updatedData: { ...updatedData },
    },
  };
};
export const searched = (searchValue) => {
  return {
    type: SEARCH_BOOKS,
    payload: searchValue,
  };
};
export const featured = () => {
  return {
    type: FEATURED_BOOKS,
  };
};
