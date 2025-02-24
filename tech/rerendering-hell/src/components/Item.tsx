type Props = {
  counter: number;
}

export const Item = ({ counter }: Props) => {
  console.log('Yes I amm re-rendering');
  return (
    <div>
      <p>
        This is item number {counter}
      </p>
    </div>
  );
}