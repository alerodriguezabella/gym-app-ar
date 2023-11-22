import React, { useEffect, useState } from 'react';
import Workout from '../components/Workout';
import { getWorkout, WorkoutType } from '../services/workoutsService';
import { useParams } from "react-router-dom";
import Exercise from '../components/Exercise';
import { useNavigate } from 'react-router-dom';

function WorkoutDetail() {
  const [workout, setWorkout] = useState<WorkoutType | null>(null);
  const { id } = useParams();
  const navigate = useNavigate()

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
      <button onClick={() => navigate(-1)}>Back</button>
      <Workout workout={workout}/>
      {workout.exercises.map((exercise) => <Exercise exercise={exercise}/>)}
    </div>
  );
}

export default WorkoutDetail;
