import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkoutDetail from './pages/WorkoutDetail';
import NotFound from "./pages/NotFound";
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import ProgramPhaseDetail from './pages/ProgramPhaseDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Programs />} />
        <Route path='/:id' element={<ProgramDetail />} />
        <Route path='/programPhase/:id' element={<ProgramPhaseDetail />} />
        <Route path="/workout/:id" element={<WorkoutDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
