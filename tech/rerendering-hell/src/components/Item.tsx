type Props = {
  counter: number;
}

export const Item = ({ counter }: Props) => {
  console.log('Yes I amm re-rendering ', counter);

  return (
    <div className="row">
      <img src="https://picsum.photos/100/100" width="100" height="100" />
      <p>
        This is item number {counter}
      </p>
    </div>
  );
}