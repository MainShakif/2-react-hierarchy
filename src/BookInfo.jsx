import PropTypes from "prop-types";

function BookInfo({ title, author }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookInfo;
