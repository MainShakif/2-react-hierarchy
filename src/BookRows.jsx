import BookInfo from "./BookInfo";
import BookMarkLogo from "./BookMarkLogo";

import PropTypes from "prop-types";

function BookRows({ book }) {
  return (
    <div>
      <BookInfo title={book.title} author={book.author} />
      <BookMarkLogo featured={book.featured} />
    </div>
  );
}

BookRows.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookRows;
