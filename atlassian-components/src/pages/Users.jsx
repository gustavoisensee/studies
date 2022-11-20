import UserModal from '../components/UserModal';
import UserFilters from '../components/UserFilters';
import UsersTable from '../components/UsersTable';

function Users() {
  return (
    <div className='Users'>
      <div className='flex justify-between'>
        <UserFilters />
        <UserModal />
      </div>
      <UsersTable />
    </div>
  );
}

export default Users;
