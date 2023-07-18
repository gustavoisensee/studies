import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Planet = { name: string };
type Data = {
  results: Planet[]
}

const fetchPlanets = async (): Promise<Data> => {
  return axios
    .get('https://swapi.dev/api/planets')
    .then((res) => res.data as Data);
};

const Planets = () => {
  const { data, isLoading, isError } = useQuery<Data, Error>({
    queryKey: ['planets'],
    queryFn: fetchPlanets,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error while fetching</div>;

  return (
    <div>
      Planets
      {data.results.map((r: Planet, i: number) => (
        <div key={i}>{r.name}</div>
      ))}
    </div>
  );
};

export default Planets;
