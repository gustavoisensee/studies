import Spinner from '@atlaskit/spinner';
import Menu from '../components/Menu';
import useData from '../hooks/useData';

function Page1() {
  const { data, loading } = useData();

  return (
    <div>
      <h1 className='text-3xl font-bold mb-4'>Page 1</h1>
      {loading ? <Spinner size='medium' /> : <Menu children={data} />}
    </div>
  );
}

export default Page1;
