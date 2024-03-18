import { useEffect, useState } from 'react';
import { ProgramType, getPrograms } from '../services/programsService';
import { Link } from '@mui/material';

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
      <h1>Workout programs</h1>
      <ul>
        {programs.map((program) => 
          <li>
            <Link href={`/${program._id}`}>
              <h2 className='link-primary'>{program.name}</h2>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Programs;
