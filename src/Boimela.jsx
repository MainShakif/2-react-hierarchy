import BookList from "./BookList";
import Header from "./Header";
import SearchBar from "./SearchBar";

function Boimela() {
  return (
    <div className="font-sans space-y-3 max-w-6xl mx-auto px-5">
      <Header />
      <SearchBar />
      <BookList />
    </div>
  );
}

export default Boimela;
