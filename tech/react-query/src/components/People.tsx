import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Person = { name: string };
type Data = {
  results: Person[]
}

const fetchPeople = async (): Promise<Data> => {
  return axios
    .get('https://swapi.dev/api/people')
    .then((res) => res.data as Data);
};

const People = () => {
  const { data, isLoading, isError } = useQuery<Data, Error>({
    queryKey: ['people'],
    queryFn: fetchPeople,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error while fetching</div>;

  return (
    <div>
      People
      {data.results.map((r: Person, i: number) => (
        <div key={i}>{r.name}</div>
      ))}
    </div>
  );
};

export default People;
