import {Routes, Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import EditorPage from './Pages/EditorPage/EditorPage';
import Dashboard from './Pages/Dashboard/Dashboard'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/editor' element={<EditorPage />} />
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
  );
}

export default App;
