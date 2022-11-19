import Avatar from '@atlaskit/avatar';

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
    ],
  }));

  return rows;
};