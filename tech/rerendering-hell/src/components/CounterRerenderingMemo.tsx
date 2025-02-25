import { memo, useState } from 'react';

import { Item } from './Item';
import Label from './Label';
import SubLabel from './SubLabel';
import { myArray } from '../constants';

const MemoItem = memo(Item);

function CounterRerenderingMemo() {
  const [count, setCount] = useState(0);

  console.log('Rendering CounterRerenderingMemo.tsx');

  return (
    <div className="container">
      <h3>Counter - memo</h3>

      <Label />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <SubLabel />
      {myArray.map((_, i) => (
        <MemoItem key={i} counter={i} />
      ))}
    </div>
  )
}

export default CounterRerenderingMemo
