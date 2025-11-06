import { updated } from "../books/actions";

const updateBook = (bookdID, updatedData) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${bookdID}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    const updatedRes = await response.json();
    console.log(updatedRes);
    dispatch(updated(bookdID, updatedData));
  };
};

export default updateBook;
