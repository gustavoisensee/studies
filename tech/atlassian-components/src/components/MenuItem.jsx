import { useState } from 'react';
import Menu from './Menu';

const defaultClasses =
  'pl-3 pr-3 §transition-all duration-200 rounded-sm leading-7 p-1 mb-1';
const hasChildrenClasses =
  'bg-blue-300 hover:cursor-pointer hover:bg-blue-400 hover:text-white';
const hasNotChildrenClasses = 'bg-blue-100';

function LiComponent({ name, children }) {
  const [visible, setVisible] = useState(true);
  const visibility = children ? hasChildrenClasses : hasNotChildrenClasses;

  const handleOnClick = (e) => {
    e.stopPropagation();
    setVisible(!visible);
  };

  return (
    <li onClick={handleOnClick} className='pl-3'>
      <span className={`${defaultClasses} ${visibility}`}>{name}</span>
      <Menu children={children} visible={visible} />
    </li>
  );
}

export default LiComponent;
