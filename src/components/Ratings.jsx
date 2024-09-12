import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const singleBookRatingQuery = (bookId) => ({
  queryKey: ['ratings'],
  queryFn: async () => {
    const response = await axios.get(
      `https://openlibrary.org/works/${bookId}/ratings.json`
    );
    return response.data;
  },
});

function Ratings() {
  const { bookId } = useParams();
  const { data, isPending, isError } = useQuery(singleBookRatingQuery(bookId));
  if (isPending) {
    return <Loader />;
  }
  if (isError) {
    return 'Error';
  }
  return (
    <div className="flex flex-row  bg-sky-900 text-white p-2 items-center rounded-t-md">
      <p className="text-xl  mr-2 tracking-[0.4rem]">
        Average rating: {data.rating}
      </p>
      <p className="text-xl">{Math.round(data.summary.average * 10) / 10}</p>
      <p className="text-sm m-1">/5</p>
    </div>
  );
}

export default Ratings;
