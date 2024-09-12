import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Layout from '../components/Layout';
import { DropdownMenu } from '../components/DropdownMenu';
import Ratings from '../components/Ratings';
import { IoMdArrowBack } from 'react-icons/io';
import BookDetails from '../components/BookDetails';

const singleBookQuery = (bookId) => ({
  queryKey: ['book', bookId],
  queryFn: async () => {
    const response = await axios.get(
      `https://openlibrary.org/works/${bookId}.json`
    );
    return response.data;
  },
});

// `https://openlibrary.org/works/${bookId}/editions.json?limit=1`

export const singleBookLoader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleBookQuery(params.bookId)
    );
    return response;
  };

function SingleBookPage() {
  const data = useLoaderData() || [];

  return (
    <div>
      <Layout />
      <div className="bg-white rounded-t-md mx-16">
        <div className="m-4">
          <nav className="flex items-center justify-start bg-white  pt-2 align-middle">
            <DropdownMenu />
            <Link
              to="/"
              type="button"
              className="font-bold text-l text-white bg-sky-900 ml-3 flex rounded-md max-h-8 p-1 "
            >
              <IoMdArrowBack />
              <p className="ml-1 text-xs">Back home</p>
            </Link>
            <div className="ml-auto ">
              <Ratings />
            </div>
          </nav>
          <div className="pl-10">
            <BookDetails book={data} key={data.key} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBookPage;
