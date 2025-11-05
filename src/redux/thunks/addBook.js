import { added } from "../books/actions";

const addBook = (bookData) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    });
    const bookRes = await response.json();
    console.log(bookRes);
    dispatch(added(bookRes));
  };
};

export default addBook;
