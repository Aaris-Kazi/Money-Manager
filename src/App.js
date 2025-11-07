import { Routes, Route } from 'react-router';
import './App.css';
import LandingPage from './pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import DashBoard from './pages/DashBoard';


function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path='/dashboard' element={<DashBoard />}/>
    </Routes>
  );
}

export default App;
