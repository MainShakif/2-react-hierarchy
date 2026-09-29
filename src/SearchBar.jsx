import PropTypes from "prop-types";

function SearchBar({ searchTerm, onSearchBooks }) {
  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search books"
        onChange={(event) => onSearchBooks(event.target.value)}
        className="border-2 border-gray-200 py-1 px-2 w-full rounded-md"
      />
    </form>
  );
}

SearchBar.PropTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchBook: PropTypes.func.isRequired,
};

export default SearchBar;
