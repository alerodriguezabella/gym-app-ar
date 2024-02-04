import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProgramType, getPrograms } from '../services/programsService';
import Program from '../components/Program';

function Programs() {
  const [programs, setPrograms] = useState([] as ProgramType[]);

  useEffect(() => {
    async function fetchPrograms(){
      const result = await getPrograms()
      setPrograms(result);
    }
    fetchPrograms()
  }, [])

  return (
    <div>
      {programs.map((program) => <Link to={`/${program._id}`}><Program key={program._id} program={program}/></Link>)}
    </div>
  );
}

export default Programs;
