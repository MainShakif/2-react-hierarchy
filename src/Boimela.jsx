import { useState } from "react";
import BookList from "./BookList";
import Header from "./Header";
import SearchBar from "./SearchBar";

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    featured: false,
  },
  { id: 2, title: "1984", author: "George Orwell", featured: false },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    featured: false,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    featured: false,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    featured: false,
  },
];

function Boimela() {
  const [searchTerm, setSearchTerm] = useState("1948");
  return (
    <div className="font-sans space-y-3 max-w-6xl mx-auto px-5">
      <Header />
      <SearchBar searchTerm={searchTerm} onSearchBooks={setSearchTerm} />
      <BookList searchTerm={searchTerm} books={books} />
    </div>
  );
}

export default Boimela;
