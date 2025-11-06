import { useDispatch } from "react-redux";
import addBook from "../redux/thunks/addBook";
import updateBook from "../redux/thunks/updateBook";

function BookForm({ selectedBook, checkboxHandler }) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const bookData = Object.fromEntries(formData.entries());
    const newBook = {
      ...bookData,
      price: Number(bookData.price),
      rating: Number(bookData.rating),
      featured: bookData.featured ? true : false,
    };
    dispatch(addBook(newBook));
    console.log(newBook);
  };
  const handleUpdate = (e, updatedBookdID) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const bookData = Object.fromEntries(formData.entries());
    const newBook = {
      ...bookData,
      price: Number(bookData.price),
      rating: Number(bookData.rating),
      featured: bookData.featured ? true : false,
      id: updatedBookdID,
    };
    dispatch(updateBook(updatedBookdID, newBook));
    checkboxHandler({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
    form.reset();
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form
          onSubmit={
            selectedBook.name && selectedBook.author
              ? (e) => handleUpdate(e, selectedBook.id)
              : handleSubmit
          }
          className="book-form"
        >
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              defaultValue={
                selectedBook.name && selectedBook.author && selectedBook.name
              }
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              defaultValue={
                selectedBook.name && selectedBook.author && selectedBook.author
              }
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              defaultValue={
                selectedBook.name &&
                selectedBook.author &&
                selectedBook.thumbnail
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                defaultValue={
                  selectedBook.name && selectedBook.author && selectedBook.price
                }
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                defaultValue={
                  selectedBook.name &&
                  selectedBook.author &&
                  selectedBook.rating
                }
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={selectedBook.featured}
              onChange={() =>
                checkboxHandler((prev) => ({
                  ...prev,
                  featured: !prev.featured,
                }))
              }
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          {selectedBook.name && selectedBook.author ? (
            <button type="submit" className="submit bg-orange-600!" id="submit">
              Updated Book
            </button>
          ) : (
            <button type="submit" className="submit" id="submit">
              Add Book
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default BookForm;
