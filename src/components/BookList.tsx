import BookCard from "./BookCard";

function BookList() {
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
      <div className="lws-bookContainer">
        {/* <!-- Card 1 --> */}
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}

export default BookList;
