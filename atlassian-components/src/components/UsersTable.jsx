import { useEffect, useState } from 'react';
import DynamicTable from '@atlaskit/dynamic-table';
import Pagination from '@atlaskit/pagination';
import { fetchUsers } from '../actions';
import { head, formatRows } from '../helpers/users';
import { usersObserver } from '../helpers/observer';

const limit = 10;
const defaultPage = 1;

function UsersTable() {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  const getData = async (page = 1, search = '') => {
    if (!state.loading) setState((prev) => ({ ...prev, loading: true }));

    // Add timeout just to see the table spinner
    setTimeout(async () => {
      const data = await fetchUsers(limit, page, search);
      setState((prev) => ({ ...prev, loading: false, data: formatRows(data) }));
    }, 1000);
  };

  const onSetPage = (e, page) => {
    getData(page);
  };

  useEffect(() => {
    usersObserver.subscribe(getData);

    getData(defaultPage);
    return () => {
      usersObserver.unsubscribe(getData);
    }
  }, []);

  return (
   
    <>
      <DynamicTable
        caption='List of Users'
        head={head}
        rows={state.data}
        loadingSpinnerSize='large'
        isLoading={state.loading}
      />
      <div className='flex justify-center'>
        {/* Create pagination in a separated component and with fixed amount of pages */}
        <Pagination pages={[1, 2, 3, 4, 5, 6]} onChange={onSetPage} />
      </div>
    </>
  );
}

export default UsersTable;
