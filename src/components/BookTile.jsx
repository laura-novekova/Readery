import { Link } from 'react-router-dom';
import {
  BsBookmarkCheck,
  BsBookmarkCheckFill,
  BsBookmarkHeart,
  BsBookmarkHeartFill,
  BsStar,
  BsStarFill,
} from 'react-icons/bs';
import { useGlobalContext } from './Context';
import { useState } from 'react';

function BookTile({ book }) {
  const { addToFavorites, removeFromFavorites, favorites } = useGlobalContext();
  const { addToWantToRead, removeFromWantToRead, wantToRead } =
    useGlobalContext();
  const { addToAlreadyRead, removeFromAlreadyRead, alreadyRead } =
    useGlobalContext();

  const [isFavorite, setIsFavorite] = useState(
    favorites.some((fav) => fav.key === book.key)
  );

  const [isWantToRead, setIsWantToRead] = useState(
    wantToRead.some((want) => want.key === book.key)
  );

  const [isAlreadyRead, setIsAlreadyRead] = useState(
    alreadyRead.some((read) => read.key === book.key)
  );

  const handleAddToFavorites = () => {
    if (isFavorite) {
      removeFromFavorites(book);
    } else {
      addToFavorites(book);
    }
    setIsFavorite((prevState) => !prevState);
  };

  const handleAddToWantToRead = () => {
    if (isWantToRead) {
      removeFromWantToRead(book);
    } else {
      addToWantToRead(book);
    }
    setIsWantToRead((prevState) => !prevState);
  };

  const handleAddToAlreadyRead = () => {
    if (isAlreadyRead) {
      removeFromAlreadyRead(book);
    } else {
      addToAlreadyRead(book);
    }
    setIsAlreadyRead((prevState) => !prevState);
  };
  return (
    <article
      className=" flex flex-col p-2 bg-sky-950 rounded-lg max-w-72"
      key={book.key}
    >
      <div className="flex flex-row justify-between text-white pb-3">
        <div>
          <button
            type="button"
            onClick={handleAddToFavorites}
            className="focus:outline-none"
          >
            {isFavorite ? (
              <BsStarFill className="h-5 w-5 text-white" />
            ) : (
              <BsStar className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={handleAddToAlreadyRead}
            className="focus:outline-none"
          >
            <p>
              {isAlreadyRead ? (
                <BsBookmarkCheckFill className="h-5 w-5 text-white" />
              ) : (
                <BsBookmarkCheck className="h-5 w-5 text-white" />
              )}
            </p>
          </button>
          <button
            type="button"
            onClick={handleAddToWantToRead}
            className="focus:outline-none"
          >
            <p>
              {isWantToRead ? (
                <BsBookmarkHeartFill className="h-5 w-5 text-white" />
              ) : (
                <BsBookmarkHeart className="h-5 w-5 text-white" />
              )}
            </p>
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg  flex flex-col justify-evenly">
        <div className="bg-gray-100 flex items-center  overflow-hidden shadow-sm max-h-[16rem]">
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            alt="book-1"
            className=" p-2 w-[8rem] h-[14rem] rounded-md object-cover"
          />
          <h2 className="font-bold font-serif text-base text-gray-800 ml-2  w-[8rem]">
            {book.title}
          </h2>
        </div>

        <div className="flex flex-col justify-between ml-4">
          <div>
            <p className="text-base mt-2 font-serif">
              Author:
              <span className="font-bold font-serif ml-2">
                {book.author_name[0]}
              </span>
            </p>
            <p className="text-base mt-2 font-serif">
              Year published:
              <span className="font-bold font-serif ml-2">
                {book.first_publish_year}
              </span>
            </p>
            <p className="text-base mt-2 font-serif">
              Readers' score:
              <span className="font-bold font-serif ml-2">
                {book.ratings_average ? book.ratings_average.toFixed(1) : 'N/A'}
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center w-full my-2 p-2">
          <Link
            to={`${book.key.replace('/works', '')}`}
            type="button"
            className="bg-sky-900 border-2 px-4 py-2 w-full rounded-md font-bold text-sm text-white hover:bg-white hover:border-sky-900 hover:text-sky-900 tracking-widest flex items-center justify-center"
          >
            Detail
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BookTile;
