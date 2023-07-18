import { useState } from 'react';
import Planets from './components/Planets';
import People from './components/People';

function App() {
  const [tab, setTab] = useState('planets');

  return (
    <div className='App'>
      <h2>React query page</h2>
      <div>
        <button onClick={() => setTab('planets')}>Planets</button>
        <button onClick={() => setTab('people')}>People</button>
      </div>
      <div>{tab === 'planets' ? <Planets /> : <People />}</div>
    </div>
  );
}

export default App;
