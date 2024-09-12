import { BookDescription } from './BookDescription';
import { useLoaderData } from 'react-router-dom';
import Author from './Author';
import OtherInfo from './OtherInfo';
import { useState } from 'react';
import Bookmarks from './Bookmarks';
import defaultImage from '../assets/defaultImage.jpg';

function BookDetails({ book }) {
  const data = useLoaderData() || [];

  const [isExpanded, setIsExpanded] = useState(false);

  const maxLength = 500;

  const toggleText = () => setIsExpanded(!isExpanded);

  const getDescriptionText = () => {
    if (typeof data.description === 'object' && data.description !== null) {
      return data.description.value || '';
    }
    return data.description || '';
  };
  const descriptionText = getDescriptionText();

  const imgSrc =
    data && data.covers && data.covers[0]
      ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-M.jpg`
      : defaultImage;

  return (
    <div className="flex flex-row bg-zinc-100 rounded-md gap-4">
      <div className="flex flex-col gap-3 p-2">
        <img
          src={imgSrc}
          alt="book-1"
          className="w-[34rem] h-full rounded-md object-cover"
        />
        <Bookmarks book={book} key={book.key} />
      </div>
      <div>
        <div className="">
          <h2 className="font-bold text-2xl text-sky-950 pt-2">{data.title}</h2>
          <Author authorId={data.authors[0].author.key} />
          <div className="flex mb-3 my-3">
            <div className="flex-1 mr-4">
              <OtherInfo bookId={data.key} />
            </div>
            <div className="flex-1">
              <p>Keywords:</p>
              <b>{data.subjects.slice(0, 10).join(', ')}</b>
            </div>
          </div>
        </div>
        <BookDescription
          descriptionText={descriptionText}
          maxLength={maxLength}
          isExpanded={isExpanded}
          toggleText={toggleText}
        />
      </div>
    </div>
  );
}

export default BookDetails;
