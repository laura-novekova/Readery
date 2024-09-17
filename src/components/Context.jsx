import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Local Storage
  const getLocalStorageBookmark = (bookmarkCategory) => {
    const categoryData = localStorage.getItem(bookmarkCategory);
    if (categoryData) {
      return JSON.parse(categoryData);
    } else {
      return [];
    }
  };

  const setLocalStorageBookmark = (bookmarkCategory, books) => {
    localStorage.setItem(bookmarkCategory, JSON.stringify(books));
  };

  // State
  const [favorites, setFavorites] = useState(
    getLocalStorageBookmark('favorites')
  );
  const [wantToRead, setWantToRead] = useState(
    getLocalStorageBookmark('wantToRead')
  );
  const [alreadyRead, setAlreadyRead] = useState(
    getLocalStorageBookmark('alreadyRead')
  );

  // Functions
  const addToFavorites = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);

    setLocalStorageBookmark('favorites', [...favorites, book]);
  };

  const removeFromFavorites = (book) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.key !== book.key)
    );
    setLocalStorageBookmark(
      'favorites',
      favorites.filter((fav) => fav.key !== book.key)
    );
  };

  const addToWantToRead = (book) => {
    setWantToRead((prevWantToRead) => [...prevWantToRead, book]);
    setLocalStorageBookmark('wantToRead', [...wantToRead, book]);
  };

  const removeFromWantToRead = (book) => {
    setWantToRead((prevWantToRead) =>
      prevWantToRead.filter((fav) => fav.key !== book.key)
    );
    setLocalStorageBookmark(
      'wantToRead',
      wantToRead.filter((fav) => fav.key !== book.key)
    );
  };

  const addToAlreadyRead = (book) => {
    setAlreadyRead((prevAlreadyRead) => [...prevAlreadyRead, book]);
    setLocalStorageBookmark('alreadyRead', [...alreadyRead, book]);
  };

  const removeFromAlreadyRead = (book) => {
    setAlreadyRead((prevAlreadyRead) =>
      prevAlreadyRead.filter((read) => read.key !== book.key)
    );
    setLocalStorageBookmark(
      'alreadyRead',
      alreadyRead.filter((fav) => fav.key !== book.key)
    );
  };

  const addComment = (book) => {
    console.log('Add comment');
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        wantToRead,
        addToWantToRead,
        removeFromWantToRead,
        alreadyRead,
        addToAlreadyRead,
        removeFromAlreadyRead,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
