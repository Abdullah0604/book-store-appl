import { loaded } from "../books/actions";

const fetchBooks = async (dispatch) => {
  const response = await fetch(`http://localhost:9000/books`);
  const booksData = await response.json();
  console.log(booksData);
  dispatch(loaded(booksData));
};

export default fetchBooks;
