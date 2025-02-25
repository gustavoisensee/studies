import { useState } from 'react';

import { Item } from './Item';
import Label from './Label';
import SubLabel from './SubLabel';
import { myArray } from '../constants';

function CounterRerendering() {
  const [count, setCount] = useState(0);

  console.log('Rendering CounterRerendering.tsx');

  return (
    <div className="container">
      <h3>Counter - re-rendering</h3>

      <Label />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <SubLabel />
      {myArray.map((_, i) => (
        <Item key={i} counter={i} />
      ))}
    </div>
  )
}

export default CounterRerendering
