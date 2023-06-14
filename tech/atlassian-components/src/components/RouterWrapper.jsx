import { Suspense } from 'react';

const Wrapper = ({ C }) => (
  <Suspense fallback={<>...</>}>
    <C />
  </Suspense>
);

export default Wrapper;