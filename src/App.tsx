import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Workouts from './pages/Workouts';
import WorkoutDetail from './pages/WorkoutDetail';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Workouts />} />
        <Route path="/:id" element={<WorkoutDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
