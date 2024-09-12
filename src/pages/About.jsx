import Layout from '../components/Layout';
import { DropdownMenu } from '../components/DropdownMenu';

function About() {
  return (
    <div className="font-serif">
      <Layout />
      <div className="bg-white rounded-t-md mx-16">
        <nav className="flex flex-row align-middle items-center  bg-white px-4">
          <DropdownMenu />
        </nav>
      </div>
      <div className="bg-white rounded-b-md mx-16 p-10">
        <h1 className="font-bold text-4xl mb-2 text-sky-900">About Us</h1>
        <div className="py-4">
          <p className="my-4">
            Welcome to <b> Readery </b>- your go-to digital bookshelf!
          </p>
          <p className="my-4">
            Here at Readery, we’re all about making reading fun and easy. Our
            platform lets you:
          </p>
          <ul className="ml-4 list-disc">
            <li>
              <b>Discover New Books:</b> Browse a wide selection of titles
              across all genres.
            </li>
            <li>
              <b>Track Your Reads:</b> Keep tabs on what you’ve read and what’s
              next on your list.
            </li>
            <li>
              <b>Get Book Info:</b> Find detailed book descriptions, author
              info, and more.
            </li>
          </ul>
          <p className="my-4">
            We’re here to help you discover new reads and enjoy your literary
            journey. Thanks for joining us at Readery. Happy reading!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
