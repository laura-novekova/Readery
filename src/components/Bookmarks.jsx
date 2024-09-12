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

const Bookmarks = ({ book }) => {
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
    <div className=" flex flex-col gap-2 ">
      <button
        className={`p-2 rounded-md flex items-center gap-2 focus:outline-none ${
          isFavorite ? 'bg-sky-900 text-white' : 'bg-white text-black'
        }`}
        type="button"
        onClick={handleAddToFavorites}
      >
        <span>
          {isFavorite ? (
            <BsStarFill className="h-4 w-4 text-white" />
          ) : (
            <BsStar className="h-4 w-4 text-sky-900" />
          )}
        </span>
        <span className="text-xs">Add to favorites</span>
      </button>

      <button
        className={`p-2 rounded-md flex items-center gap-2 focus:outline-none ${
          isAlreadyRead ? 'bg-sky-900 text-white' : 'bg-white text-black'
        }`}
        type="button"
        onClick={handleAddToAlreadyRead}
      >
        <span>
          {isAlreadyRead ? (
            <BsBookmarkCheckFill className="h-4 w-4 text-white" />
          ) : (
            <BsBookmarkCheck className="h-4 w-4 text-sky-900" />
          )}
        </span>
        <span className="text-xs">I already read this</span>
      </button>

      <button
        className={`p-2 rounded-md flex items-center gap-2 focus:outline-none ${
          isWantToRead ? 'bg-sky-900 text-white' : 'bg-white text-black'
        }`}
        type="button"
        onClick={handleAddToWantToRead}
      >
        <span>
          {isWantToRead ? (
            <BsBookmarkHeartFill className="h-4 w-4 text-white" />
          ) : (
            <BsBookmarkHeart className="h-4 w-4 text-sky-900" />
          )}
        </span>
        <span className="text-xs">I want to read this</span>
      </button>
    </div>
  );
};

export default Bookmarks;
