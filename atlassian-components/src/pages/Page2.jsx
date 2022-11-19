import { useEffect, useState } from 'react';
import DynamicTable from '@atlaskit/dynamic-table';
import Pagination from '@atlaskit/pagination';
import { fetchUsers } from '../actions';
import { head, formatRows } from '../helpers/page2';

const limit = 10;
const defaultPage = 1;

function Page2() {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  const getData = async (page) => {
    if (!state.loading) setState((prev) => ({ ...prev, loading: true }));

    // Add timeout just to see the table spinner
    setTimeout(async() => {
      const data = await fetchUsers(limit, page);
      setState({ loading: false, data: formatRows(data) });
    }, 2000);
  };

  const onSetPage = (e, page) => {
    getData(page);
  };

  useEffect(() => {
    getData(defaultPage);
  }, []);

  return (
    <div className='Page2'>
      <h1 className='text-3xl font-bold'>Page 2!</h1>
      <DynamicTable
        caption='List of Users'
        head={head}
        rows={state.data}
        loadingSpinnerSize='large'
        isLoading={state.loading}
        isFixedSize
      />
      <div className='flex justify-center'>
        {/* Create pagination in a separated component and with fixed amount of pages */}
        <Pagination pages={[1, 2, 3, 4, 5]} onChange={onSetPage} />
      </div>
    </div>
  );
}

export default Page2;
