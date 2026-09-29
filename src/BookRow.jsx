import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";

function BookRow({ book }) {
  return (
    <div className="shadow-md border border-gray-200 rounded-lg flex justify-between items-center p-4">
      <BookDetails title={book.title} author={book.author} />
      <FeatureBook />
    </div>
  );
}

export default BookRow;
