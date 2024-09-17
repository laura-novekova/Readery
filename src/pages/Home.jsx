import axios from 'axios';
import Layout from '../components/Layout';
import { DropdownMenu } from '../components/DropdownMenu';
import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';

const booksQuery = (type, search) => ({
  queryKey: ['books', type, search],
  queryFn: async () => {
    const urlFilter = search ? `${type}=${search}` : 'title=a';
    const response = await axios.get(
      `https://openlibrary.org/search.json?${urlFilter}&limit=12&offset=0&fields=key,title,author_name,editions,publish_year,first_publish_year,cover_i,subject,ratings_average`
    );
    return response.data;
  },
});

export const bookLoader =
  (queryClient) =>
  async ({ request }) => {
    const params = new URL(request.url).searchParams;
    const search = params.get('search');
    const type = params.get('type');
    const response = await queryClient.ensureQueryData(
      booksQuery(type, search)
    );

    return response.docs;
  };

const Home = () => {
  return (
    <>
      <Layout />
      <div className="bg-white rounded-t-md mx-16">
        <nav className="flex flex-row align-middle items-center  bg-white px-4">
          <DropdownMenu />
          <SearchForm />
        </nav>
        <div className="flex flex-wrap items-center justify-center align-middle  px-10 bg-white ">
          <BookList />
        </div>
      </div>
    </>
  );
};

export default Home;
