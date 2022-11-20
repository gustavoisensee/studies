import { useCallback } from 'react';
import debounce from 'lodash.debounce';
import TextField from '@atlaskit/textfield';
import SearchIcon from '@atlaskit/icon/glyph/search';
import { usersObserver } from '../helpers/observer';

export default function UserFilters() {
  const setSearchDebounce = useCallback(
    debounce((search) => usersObserver.notify(1, search), 500),
    []
  );

  const handleChange = ({ target: { value } }) => {
    setSearchDebounce(value);
  };

  return (
    <div>
      <TextField
        name='name'
        placeholder='Search by name'
        onChange={handleChange}
        elemBeforeInput={
          <div className='ml-2 flex items-center'>
            <SearchIcon size='small' />
          </div>
        }
      />
    </div>
  );
}
