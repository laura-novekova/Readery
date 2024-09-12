import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Local Storage
  const getLocalStorageFavorite = () => {
    let favorites = localStorage.getItem('favorites');
    if (favorites) {
      favorites = JSON.parse(localStorage.getItem('favorites'));
    } else {
      favorites = [];
    }
    return favorites;
  };

  const setLocalStorageFavorite = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const defaultBookList = JSON.parse(localStorage.getItem('favorites') || '[]');

  // State
  const [favorites, setFavorites] = useState(defaultBookList);
  const [wantToRead, setWantToRead] = useState([]);
  const [alreadyRead, setAlreadyRead] = useState([]);

  // Functions
  const addToFavorites = (book) => {
    console.log(book);
    setFavorites((prevFavorites) => [...prevFavorites, book]);
    setLocalStorageFavorite([...favorites, book]);
  };

  const removeFromFavorites = (book) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.key !== book.key)
    );
    setLocalStorageFavorite(favorites.filter((fav) => fav.key !== book.key));
  };

  const addToWantToRead = (book) => {
    setWantToRead((prevWantToRead) => [...prevWantToRead, book]);
  };

  const removeFromWantToRead = (book) => {
    setWantToRead((prevWantToRead) =>
      prevWantToRead.filter((fav) => fav.key !== book.key)
    );
  };

  const addToAlreadyRead = (book) => {
    setAlreadyRead((prevAlreadyRead) => [...prevAlreadyRead, book]);
  };

  const removeFromAlreadyRead = (book) => {
    setAlreadyRead((prevAlreadyRead) =>
      prevAlreadyRead.filter((read) => read.key !== book.key)
    );
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
