type Props = {
  children: React.ReactElement,
  isLoading: boolean;
  isError: boolean;
}

const Wrapper = ({ children, isLoading, isError }: Props) => {
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error while fetching</div>;

  return (
    <>
      {children}
    </>
  );
};

export default Wrapper;
