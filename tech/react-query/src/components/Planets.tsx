import { Result } from '../types';
import { useData } from '../hooks';
import Wrapper from './Wrapper';
import { fetchPlanets } from '../utils/fetches';

const Planets = () => {
  const { data, isLoading, isError } = useData(fetchPlanets, 'planets');

  return (
    <Wrapper isLoading={isLoading} isError={isError}>
      <div>
        Planets
        {data?.results.map((r: Result, i: number) => (
          <div key={i}>{r.name}</div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Planets;
