import React, { useEffect, useState } from 'react';
import Workout from '../components/Workout';
import { getWorkout, WorkoutType } from '../services/workoutsService';
import { useParams } from "react-router-dom";


function WorkoutDetail() {
  const [workout, setWorkout] = useState<WorkoutType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchWorkout(){
      if(id){
        const result = await getWorkout(id)
        setWorkout(result);
      }
    }
    fetchWorkout()
  }, [id])

  return (
    <div>
      <p>Workout detail</p>
      {/* {workout.map((workout) => <Workout key={workout._id} workout={workout}/>)} */}
      {workout ? <Workout workout={workout}/> : null}
    </div>
  );
}

export default WorkoutDetail;
