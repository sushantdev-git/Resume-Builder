import { Routes, Route, useLocation, Navigate, } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import EditorPage from "./Pages/EditorPage/EditorPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
    
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='*'  element={<Navigate to="/"/>} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
