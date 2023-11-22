import React, { useEffect, useState } from 'react';
import Workout from '../components/Workout';
import { getWorkout, WorkoutType } from '../services/workoutsService';
import { useParams } from "react-router-dom";
import Exercise from '../components/Exercise';


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

  if(!workout){
    return null
  }
  return (
    <div>
      <Workout workout={workout}/>
      {workout.exercises.map((exercise) => <Exercise exercise={exercise}/>)}
    </div>
  );
}

export default WorkoutDetail;
