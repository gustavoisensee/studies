import Wrapper from './Wrapper';
import { fetchPeople } from '../utils/fetches';
import { Result } from '../types';
import { useData } from '../hooks';

const People = () => {
  const { data, isLoading, isError } = useData(fetchPeople, 'people');

  return (
    <Wrapper isLoading={isLoading} isError={isError}>
      <div>
        People
        {data?.results.map((r: Result, i: number) => (
          <div key={i}>{r.name}</div>
        ))}
      </div>
    </Wrapper>
  );
};

export default People;
