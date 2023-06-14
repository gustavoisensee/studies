import UserModal from '../components/UserModal';
import UserDeleteModal from '../components/UserDeleteModal';
import UserFilters from '../components/UserFilters';
import UsersTable from '../components/UsersTable';

function Users() {
  return (
    <div className='Users'>
      <div className='flex justify-between'>
        <UserFilters />
        <UserModal />
        <UserDeleteModal />
      </div>
      <UsersTable />
    </div>
  );
}

export default Users;
