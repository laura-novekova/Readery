import { useSearchParams } from 'react-router-dom';

function SearchForm() {
  const [params, setSearchParams] = useSearchParams();
  const search = params.get('search');

  const handleClear = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <form className="w-full flex justify-end m-4">
      <input
        defaultValue={search}
        type="text"
        name="search"
        placeholder="e.g. Agatha Christie"
        className="border-gray-400 border-2 p-1 rounded-md"
      />
      <button
        type="submit"
        className="ml-2 font-bold text-sm rounded-md bg-sky-950 text-white p-2 font-serif tracking-widest"
      >
        SEARCH
      </button>
      <button
        type="button"
        className="ml-2 bg-indigo-50 rounded-md text-sm font-bold p-2 font-serif tracking-widest"
        disabled={!search}
        onClick={handleClear}
      >
        CLEAR
      </button>
    </form>
  );
}

export default SearchForm;
