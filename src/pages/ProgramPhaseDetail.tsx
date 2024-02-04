import { Link, useNavigate } from 'react-router-dom';
import { ProgramPhaseType } from '../services/programsService';
import { useLocation } from "react-router-dom";
import Workout from '../components/Workout';

function ProgramPhaseDetail() {
  const location = useLocation();
  const programPhase = location.state as ProgramPhaseType;
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <p>{programPhase.name}</p>
      {programPhase.workouts.map((workout) => <Link to={`/workout/${workout._id}`}><Workout key={workout._id} workout={workout}/></Link>)}
    </div>
  );
}

export default ProgramPhaseDetail;
