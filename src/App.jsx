import { Provider } from "react-redux";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import store from "./redux/store";
import { useState } from "react";

function App() {
  const [selectedBook, setSelectedBook] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });
  const selectedBookHandler = (selectBook) => {
    setSelectedBook(selectBook);
  };
  return (
    <Provider store={store}>
      <div>
        <Navbar />

        <main className="py-12 2xl:px-6">
          <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
            <BookList updatedBookHandler={selectedBookHandler} />

            <BookForm
              selectedBook={selectedBook}
              checkboxHandler={setSelectedBook}
            />
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;
