import { ProgramPhaseType } from '../services/programsService';
import { useLocation } from "react-router-dom";
import { Link } from '@mui/material';
import BackButton from '../components/BackButton';

function ProgramPhaseDetail() {
  const location = useLocation();
  const programPhase = location.state as ProgramPhaseType;

  return (
    <div>
      <div style={{display: 'flex', alignItems: 'center' }}>
        <BackButton/>
        <h1 style={{margin: 0}}>{programPhase.name}</h1>
      </div>
      <ul>
        {programPhase.workouts.map((workout) => 
          <li>
            <Link href={`/workout/${workout._id}`}>
              <h2 className='link-primary'>{workout.name}</h2>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ProgramPhaseDetail;
