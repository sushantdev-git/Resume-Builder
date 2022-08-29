import logo from './logo.svg';
import './App.css';

import {Routes, Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import EditorPage from './Pages/EditorPage/EditorPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/editor' element={<EditorPage />} />
    </Routes>
  );
}

export default App;
