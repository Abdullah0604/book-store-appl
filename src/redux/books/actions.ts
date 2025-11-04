import {
  ADD_BOOKS,
  DELETE_BOOKS,
  LOADED_BOOKS,
  SEARCH_BOOKS,
  UPDATE_BOOKS,
} from "./actionsType";

interface BookData {
  name: string;
  author: string;
  thumbnail: string;
  price: number;
  rating: number;
  featured: boolean;
}

export const loaded = () => {
  return {
    type: LOADED_BOOKS,
  };
};
export const added = (bookData: BookData) => {
  return {
    type: ADD_BOOKS,
    payload: {
      ...bookData,
    },
  };
};

export const deleted = (bookID: string | number) => {
  return {
    type: DELETE_BOOKS,
    payload: bookID,
  };
};
export const updated = (bookID: string | number, updatedData: object) => {
  return {
    type: UPDATE_BOOKS,
    payload: {
      bookID,
      updatedData: { ...updatedData },
    },
  };
};
export const searched = (searchValue: string) => {
  return {
    type: SEARCH_BOOKS,
    payload: searchValue,
  };
};
export const featured = () => {
  return {
    type: SEARCH_BOOKS,
  };
};
