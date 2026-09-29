import PropTypes from "prop-types";

import BookRow from "./BookRow";

function BookList({ searchTerm, books }) {
  console.log(searchTerm);
  console.log(books);
  return (
    <ul className="space-y-3">
      {books.map((book) => (
        <li key={book.id}>
          <BookRow book={book} />
        </li>
      ))}
    </ul>
  );
}

BookList.PropTypes = {
  searchTerm: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};

export default BookList;
