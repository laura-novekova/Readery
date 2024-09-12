import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="mx-16 my-4">
      <div className="flex items-center gap-x-6  mt-8">
        <h1 className="text-5xl font-nova text-white uppercase tracking-[1.5rem]">
          readery
        </h1>
        <h1 className="text-5xl font-nova text-white uppercase">|</h1>
        <h1 className="text-1xl font-nova text-white uppercase tracking-[1rem]">
          <span>
            My Digital
            <br />
            Bookshelf
          </span>
        </h1>
      </div>
      <nav className="flex items-center gap-x-4 text-base text-white mt-3 justify-end font-sans tracking-[0.25rem]">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Header;
