import { deleted } from "../books/actions";

const deleteBook = (bookdID) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${bookdID}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const deletedBook = await response.json();
    console.log(deletedBook);
    dispatch(deleted(bookdID));
  };
};

export default deleteBook;
