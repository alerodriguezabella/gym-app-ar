import React, { useEffect, useState } from 'react';
import Workout from '../components/Workout';
import { getWorkout, WorkoutType } from '../services/workoutsService';
import { useParams } from "react-router-dom";
import WorkoutExercise from '../components/WorkoutExercise';
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
      {workout.workoutExercises.map((workoutExercise) => <WorkoutExercise key={workoutExercise._id} workoutExercise={workoutExercise}/>)}
    </div>
  );
}

export default WorkoutDetail;
