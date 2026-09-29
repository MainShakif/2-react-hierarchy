function BookDetails({ title, author }) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-400">{author}</p>
    </div>
  );
}

export default BookDetails;
