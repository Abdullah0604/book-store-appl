import { useDispatch } from "react-redux";
import DeleteIcon from "./DeleteIcon";
import StarIcon from "./StarIcon";
import UpdateIcon from "./UpdateIcon";
import deleteBook from "../redux/thunks/deleteBook";

function BookCard({ book, updatedBookHandler }) {
  const { thumbnail, rating, price, name, id, featured, author } = book;
  const dispatch = useDispatch();
  const hanldeDeleteBook = (bookID) => {
    dispatch(deleteBook(bookID));
  };
  return (
    <div className="book-card">
      <img
        className="h-60 w-[170px] object-cover lws-bookThumbnail"
        src={thumbnail}
        alt={name}
      />
      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div className="flex items-center justify-between">
          {featured && (
            <span className="badge-success lws-Badge">featured</span>
          )}
          <div className="text-gray-500 space-x-2">
            <button
              onClick={() => updatedBookHandler(book)}
              className="lws-edit"
            >
              <UpdateIcon />
            </button>
            <button onClick={() => hanldeDeleteBook(id)} className="lws-delete">
              <DeleteIcon />
            </button>
          </div>
        </div>

        <div className="space-y-2 mt-4 h-full">
          <h4 className="lws-bookName">{name}</h4>
          <p className="lws-author">{author}</p>
          <div className="lws-stars">
            {Array.from({ length: Math.round(rating) }, (_, k) => (
              <StarIcon key={k} />
            ))}
          </div>
          <p className="lws-price">BDT {price}</p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
