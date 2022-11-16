import { lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Wrapper from './components/RouterWrapper';
import { Routes as CRoutes } from './consts';
import './App.css';

const Page1 = lazy(() => import('./pages/Page1'));
const Page2 = lazy(() => import('./pages/Page2'));

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <div className='mt-2 p-4'>
          <Routes>
            <Route path={CRoutes.Page1} element={<Wrapper C={Page1} />} />
            <Route path={CRoutes.Page2} element={<Wrapper C={Page2} />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
