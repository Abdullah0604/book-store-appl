import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import fetchBooks from "../redux/thunks/fetchBooks";

function BookList({ updatedBookHandler }) {
  const storedBooks = useSelector((state) => state);
  const [books, setBooks] = useState();
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  const featuredBooks = storedBooks.filter((book) => book.featured);

  const handleFeatured = (status) => {
    if (status === "featured") {
      setBooks([...featuredBooks]);
      setFilter("featured");
    } else {
      setBooks(storedBooks);
      setFilter("all");
    }
  };
  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);
  useEffect(() => {
    setBooks(storedBooks);
  }, [storedBooks]);
  console.log(books);
  return (
    <div className="order-2 xl:-order-1">
      {/* filter  */}
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleFeatured("all")}
            className={`filter-btn ${filter === "all" && "active-filter"}`}
            id="lws-filterAll"
          >
            All
          </button>
          <button
            onClick={() => handleFeatured("featured")}
            className={`filter-btn ${filter === "featured" && "active-filter"}`}
            id="lws-filterFeatured"
          >
            Featured
          </button>
        </div>
      </div>
      {/* books container */}
      {books && books.length > 0 ? (
        <div className="lws-bookContainer">
          {/* <!-- Card 1 --> */}
          {books.map((book) => (
            <BookCard
              updatedBookHandler={updatedBookHandler}
              key={book.id}
              book={book}
            />
          ))}
        </div>
      ) : (
        <div className="text-center font-bold text-xl text-gray-400">
          Books is not added Yet
        </div>
      )}
    </div>
  );
}

export default BookList;
