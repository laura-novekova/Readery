import { Link } from 'react-router-dom';
import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';

export function DropdownMenu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const handleMenuClick = () => setIsMenuVisible(!isMenuVisible);

  return (
    <div className="relative">
      <button type="button" onClick={handleMenuClick}>
        <TiThMenu className="w-8 h-8 mt-4 text-sky-950" />
      </button>
      <div
        className={
          isMenuVisible
            ? 'bg-sky-950 p-4 absolute -top-1 w-[12rem] h-[16rem]'
            : 'hidden'
        }
      >
        <ul className="text-white mt-2">
          <li className="absolute top-3 right-3">
            <IoMdClose
              className="cursor-pointer h-6 w-6"
              onClick={() => setIsMenuVisible(false)}
            />
          </li>
          <div className="tracking-widest">
            <li className="my-3">
              <Link to="/">All books</Link>
            </li>
            <li className="my-3">
              <Link to="/Favorites">Favorites</Link>
            </li>
            <li className="my-3">
              <Link to="/AlreadyRead">Already Read</Link>
            </li>
            <li className="my-3">
              <Link to="/WantToRead">Want to Read</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
