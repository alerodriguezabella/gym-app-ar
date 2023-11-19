import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Workout from '../components/Workout';
import { getWorkouts, WorkoutType } from '../services/workoutsService';

function Workouts() {
  const [workouts, setWorkouts] = useState([] as WorkoutType[]);

  useEffect(() => {
    async function fetchWorkouts(){
      const result = await getWorkouts()
      setWorkouts(result);
    }
    fetchWorkouts()
  }, [])

  return (
    <div>
      {workouts.map((workout) => <Link to={`/${workout._id}`}><Workout key={workout._id} workout={workout}/></Link>)}
    </div>
  );
}

export default Workouts;
