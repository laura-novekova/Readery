import { useGlobalContext } from '../components/Context';
import { DropdownMenu } from '../components/DropdownMenu';
import Layout from '../components/Layout';
import { AiOutlineClose } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa';
import defaultImage from '../assets/defaultImage.jpg';

const AlreadyRead = () => {
  const { alreadyRead, removeFromAlreadyRead } = useGlobalContext();

  return (
    <div>
      <Layout />
      <div className="bg-white rounded-md mx-16 mb-3 p-2">
        <nav className="align-middle items-center bg-white mx-16 mt-6 h-14">
          <DropdownMenu />
        </nav>
        <div>
          <h1 className="text-2xl mx-16 mt-3 font-semibold text-sky-900 tracking-widest">
            Books I Already Read
          </h1>
          <hr className="border-t-2 mx-16 border-sky-900 my-2" />
        </div>
        <div className="mx-16 mt-3">
          {alreadyRead.length === 0 ? (
            <div className="flex items-center mb-4">
              There are currently no books in here
            </div>
          ) : (
            alreadyRead.map((readBook) => {
              const addedDate = new Date().toLocaleDateString('sk-SK');

              return (
                <div key={readBook.key} className="flex items-center mb-4">
                  <img
                    src={readBook.bookCover}
                    alt={readBook.title}
                    className="h-full w-[3rem] object-cover rounded-l"
                  />
                  <div className="flex flex-col mx-4">
                    <p className="text-xs">Added on {addedDate}</p>
                    <p className="text-base ">{readBook.title}</p>
                  </div>

                  <div className="ml-auto flex flex-row gap-3">
                    <button
                      onClick={() => removeFromAlreadyRead(readBook)}
                      className="text-white bg-red-700 rounded-md flex flex-row items-center p-1"
                    >
                      <AiOutlineClose className="h-3 w-3" />
                      <span className="text-xs pl-1">Remove</span>
                    </button>
                    <button className="text-white bg-green-700 rounded-md flex flex-row items-center p-1">
                      <FaPen className="h-3 w-3" />
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

export default AlreadyRead;
