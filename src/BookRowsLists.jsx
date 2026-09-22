import BookRows from "./BookRows";

const BOOKS = [
  {
    id: 1,
    title: "Book name",
    author: "Paulo Coelho",
    featured: true,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    featured: true,
  },
  {
    id: 3,
    title: "Book name 01",
    author: "George Orwell",
    featured: false,
  },
  {
    id: 4,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    featured: false,
  },
  {
    id: 5,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    featured: true,
  },
];

export default function BookRowsLists() {
  return (
    <ul>
      {/* <h3>Book Rows list's</h3> */}
      {BOOKS.map((book) => (
        <li key={book.id}>
          <BookRows book={book} />
        </li>
      ))}
    </ul>
  );
}
