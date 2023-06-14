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

const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/Users'));

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <div className='mt-2 p-4'>
          <Routes>
            <Route path={CRoutes.Home} element={<Wrapper C={Home} />} />
            <Route path={CRoutes.Users} element={<Wrapper C={Users} />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
