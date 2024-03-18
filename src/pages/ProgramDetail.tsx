import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ProgramPhaseType, ProgramType, getProgram } from '../services/programsService';
import BackButton from '../components/BackButton';

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
      <div style={{display: 'flex', alignItems: 'center' }}>
        <BackButton/>
        <h1 style={{margin: 0}}>{program.name}</h1>
      </div>
      <ul>
        {program.programPhases.map((programPhase) => 
          <li>
            <h2 className='link-primary' onClick={() => handleClick(programPhase)}>{programPhase.name}</h2>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ProgramDetail;
