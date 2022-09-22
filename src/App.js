import { Routes, Route, useLocation, Navigate, } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import EditorPage from "./Pages/EditorPage/EditorPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";

import {HelperActions} from './store/Features/Helper';
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HelperActions.changePath(location.pathname))
  }, [location.pathname]) 
  
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
