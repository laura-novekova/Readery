import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchAuthor = async (authorId) => {
  const response = await axios.get(`https://openlibrary.org${authorId}.json`);
  return response.data;
};

function Author({ authorId }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['author', authorId],
    queryFn: () => fetchAuthor(authorId),
  });

  if (isLoading) return <p>Loading author details...</p>;
  if (isError) return <p>Error loading author details.</p>;

  return (
    <div>
      <h4 className="font-bold text-xl mt-2  text-sky-950">{data.name}</h4>
    </div>
  );
}

export default Author;
