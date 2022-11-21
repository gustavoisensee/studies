import Avatar from '@atlaskit/avatar';
import EditIcon from '@atlaskit/icon/glyph/edit';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import Button from '@atlaskit/button';
import { openUserDeleteModal, openUserModal } from './observer';

export const head = {
  cells: [
    {
      key: 'name',
      content: 'Name',
      isSortable: true,
    },
    {
      key: 'email',
      content: 'E-mail',
      isSortable: true,
    },
    {
      key: '',
      content: '',
      // width: 100
    },
  ],
};

export const formatRows = (data) => {
  const rows = data.map(({ id, name, email, avatar }) => ({
    key: id,
    cells: [
      {
        key: name,
        content: (
          <div className='flex items-center'>
            <Avatar appearance='circle' src={avatar} size='large' name={name} />
            <span className='ml-2'>{name}</span>,
          </div>
        ),
      },
      {
        key: email,
        content: email,
      },
      {
        key: '',
        content: (
          <div className='flex justify-end'>
            <Button onClick={() => openUserModal(id)} iconBefore={<EditIcon />}>
              Edit
            </Button>
            <div className='ml-2'>
              <Button
                iconBefore={<TrashIcon primaryColor='#FF5630' />}
                onClick={() => openUserDeleteModal(id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ),
      },
    ],
  }));

  return rows;
};
