import { useState } from 'react';

import CounterRerendering from './components/CounterRerendering';
import CounterRerenderingIsolatedButton from './components/CounterRerenderingIsolatedButton';
import CounterRerenderingMemo from './components/CounterRerenderingMemo';

import './App.css';

type Option = 'counter' | 'counter-isolated-button' | 'counter-memo';

const options = [
  { value: 'counter', label: 'Counter - re-rendering' },
  { value: 'counter-isolated-button', label: 'Counter - isolated button' },
  { value: 'counter-memo', label: 'Counter - memo' }
];

const mapComponent = {
  'counter': CounterRerendering,
  'counter-isolated-button': CounterRerenderingIsolatedButton,
  'counter-memo': CounterRerenderingMemo,
};

function App() {
  const [select, setSelect] = useState('counter');
  const Component = mapComponent[select as Option];

  return (
    <>
      <h1>Stop the re-rendering hell!</h1>

      <select onChange={(e) => setSelect(e.currentTarget.value)}>
        {options.map((option, i) => (
          <option key={`option-${i}`} selected={select === option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <Component />
    </>
  )
}

export default App
