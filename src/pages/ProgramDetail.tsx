import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ProgramPhaseType, ProgramType, getProgram } from '../services/programsService';
import Program from '../components/Program';

function ProgramDetail() {
  const [program, setProgram] = useState<ProgramType | null>(null);
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchProgram(){
      if(id){
        const result = await getProgram(id)
        setProgram(result);
      }
    }
    fetchProgram()
  }, [id])

  if(!program){
    return null
  }

  function handleClick(programPhase:ProgramPhaseType) {
    navigate(`/programPhase/${programPhase._id}`, {state: programPhase})
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <Program program={program}/>
      {program.programPhases.map((programPhase) => <h3 className='phase-name' onClick={() => handleClick(programPhase)}>{programPhase.name}</h3>)}
    </div>
  );
}

export default ProgramDetail;
