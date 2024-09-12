import BookTile from './BookTile';
import { useLoaderData } from 'react-router-dom';

function BookList() {
  const data = useLoaderData() || [];

  return (
    <div className="flex flex-wrap max-w-full justify-evenly gap-4 m-2">
      {data.map((book) => {
        return <BookTile book={book} key={book.key} />;
      })}
    </div>
  );
}

export default BookList;
