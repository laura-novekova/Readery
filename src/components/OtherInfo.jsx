import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const singleBookInfoQuery = async (bookId) => {
  const response = await axios.get(
    `https://openlibrary.org/works/${bookId}/editions.json`
  );
  return response.data;
};

const OtherInfo = () => {
  const { bookId } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['book', bookId],
    queryFn: () => singleBookInfoQuery(bookId),
  });
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return 'Error';
  }
  if (!data || !data.entries || data.entries.length === 0) {
    return <p>No editions found.</p>;
  }

  const extractYear = (dateStr) => {
    if (!dateStr) return Infinity;
    const match = dateStr.match(/(\d{4})/);
    return match ? parseInt(match[1], 10) : Infinity;
  };

  const firstEdition = data.entries.reduce((oldest, current) => {
    const currentYear = extractYear(current.publish_date);
    const oldestYear = extractYear(oldest.publish_date);
    return currentYear < oldestYear ? current : oldest;
  }, data.entries[0]);

  return (
    <div className="flex flex-col gap-3">
      <p>
        <span>
          First Publish Year:
          <b className="ml-4">{firstEdition.publish_date || ' N/A'}</b>
        </span>
      </p>
      <p>
        <span>
          First Publish Place:
          <b className="ml-4 font-semibold">
            {firstEdition.publish_places?.length > 0
              ? firstEdition.publish_places.join(', ')
              : 'N/A'}
          </b>
        </span>
      </p>
      <p>
        <span>
          Total Pages:
          <b className="ml-4">{firstEdition.number_of_pages || ' N/A'}</b>
        </span>
      </p>
    </div>
  );
};

export default OtherInfo;
