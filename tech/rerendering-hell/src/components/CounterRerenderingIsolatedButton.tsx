import { useState } from 'react';

import { Item } from './Item';
import Label from './Label';
import SubLabel from './SubLabel';
import { myArray } from '../constants';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
};

function CounterRerenderingIsolatedButton() {
  console.log('Rendering CounterRerenderingIsolatedButton.tsx');

  return (
    <div className="container">
      <h3>Counter - isolated button</h3>

      <Label />
      <div className="card">
        <Counter />
      </div>

      <SubLabel />
      {myArray.map((_, i) => (
        <Item key={i} counter={i} />
      ))}
    </div>
  )
}

export default CounterRerenderingIsolatedButton
