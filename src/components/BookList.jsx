import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import fetchBooks from "../redux/thunks/fetchBooks";

function BookList({ updatedBookHandler }) {
  const storedBooks = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);
  console.log(storedBooks);
  return (
    <div className="order-2 xl:-order-1">
      {/* filter  */}
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button className="filter-btn active-filter" id="lws-filterAll">
            All
          </button>
          <button className="filter-btn" id="lws-filterFeatured">
            Featured
          </button>
        </div>
      </div>
      {/* books container */}
      {storedBooks && storedBooks.length > 0 ? (
        <div className="lws-bookContainer">
          {/* <!-- Card 1 --> */}
          {storedBooks.map((book) => (
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
