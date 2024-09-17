import { useGlobalContext } from '../components/Context';
import { DropdownMenu } from '../components/DropdownMenu';
import Layout from '../components/Layout';
import { AiOutlineClose } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa';
import defaultImage from '../assets/defaultImage.jpg';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useGlobalContext();

  return (
    <div>
      <Layout />
      <div className="bg-white rounded-md mx-16 mb-3 p-2">
        <nav className="align-middle items-center bg-white mx-16 mt-6 h-14">
          <DropdownMenu />
        </nav>
        <div>
          <h1 className="text-2xl mx-16 mt-3 font-semibold text-sky-900 tracking-widest">
            My Favorite Books
          </h1>
          <hr className="border-t-2 mx-16 border-sky-900 my-2" />
        </div>
        <div className="mx-16 mt-3">
          {favorites.length === 0 ? (
            <div className="flex items-center mb-4">
              There are currently no books in here
            </div>
          ) : (
            favorites.map((favoriteBook) => {
              const currentDate = new Date().toLocaleDateString('sk-SK');

              return (
                <div key={favoriteBook.key} className="flex items-center mb-4">
                  <img
                    src={favoriteBook.bookCover}
                    alt={favoriteBook.title}
                    className="h-full w-[3rem] object-cover rounded-l"
                  />
                  <div className="flex flex-col mx-4">
                    <p className="text-xs">Added on {currentDate}</p>
                    <p className="text-base">{favoriteBook.title}</p>
                  </div>

                  <div className="ml-auto flex flex-row gap-3">
                    <button
                      onClick={() => removeFromFavorites(favoriteBook)}
                      className=" text-white bg-red-700 rounded-md flex flex-row items-center p-1 "
                    >
                      <AiOutlineClose className=" h-3 w-3" />
                      <span className="text-xs pl-1">Remove</span>
                    </button>
                    <button className=" text-white bg-green-700 rounded-md flex flex-row items-center p-1">
                      <FaPen className=" h-3 w-3" />
                      <span className="text-xs pl-1">Add comment</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
