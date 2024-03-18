import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkoutDetail from './pages/WorkoutDetail';
import NotFound from "./pages/NotFound";
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import ProgramPhaseDetail from './pages/ProgramPhaseDetail';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material';

const THEME = createTheme({
  typography: {
   "fontFamily": `"Raleway", sans-serif`,
  },
  palette: {
    text: {
      primary: '#46494C',
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none'
      }
    }
  }
});

function App() {
  return (
    <>
     <ThemeProvider theme={THEME}>
      <Navbar/>
      <div style={{margin:'40px'}}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Programs />} />
            <Route path='/:id' element={<ProgramDetail />} />
            <Route path='/programPhase/:id' element={<ProgramPhaseDetail />} />
            <Route path="/workout/:id" element={<WorkoutDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
     </ThemeProvider>
    </>
  );
}

export default App;
