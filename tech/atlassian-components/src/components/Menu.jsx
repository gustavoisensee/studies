import MenuItem from './MenuItem';

const defaultClasses =
  'list-none cursor-default bg-inherit opacity-100 duration-300';
const visibleClasses = 'max-h-fit opacity-100';
const invisibleClasses = 'opacity-0 max-h-0 overflow-hidden';

function UlComponent({ children, visible = true }) {
  const visibility = visible ? visibleClasses : invisibleClasses;

  return (
    <ul className={`${defaultClasses} ${visibility}`}>
      {children?.map((c) => (
        <MenuItem key={c.id} {...c} />
      ))}
    </ul>
  );
}

export default UlComponent;
