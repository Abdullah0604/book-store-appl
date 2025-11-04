import DeleteIcon from "./DeleteIcon";
import StarIcon from "./StarIcon";
import UpdateIcon from "./UpdateIcon";

function BookCard() {
  return (
    <div className="book-card">
      <img
        className="h-60 w-[170px] object-cover lws-bookThumbnail"
        src="https://m.media-amazon.com/images/P/B07DZ86WP7.01._SCLZZZZZZZ_SX500_.jpg"
        alt="book"
      />
      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="badge-success lws-Badge">featured</span>
          <div className="text-gray-500 space-x-2">
            <button className="lws-edit">
              <UpdateIcon />
            </button>
            <button className="lws-delete">
              <DeleteIcon />
            </button>
          </div>
        </div>

        <div className="space-y-2 mt-4 h-full">
          <h4 className="lws-bookName">
            Life Hurts: A Doctor's Personal Journey Through Anorexia
          </h4>
          <p className="lws-author">Dr Elizabeth McNaught</p>
          <div className="lws-stars">
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p className="lws-price">BDT 14</p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
