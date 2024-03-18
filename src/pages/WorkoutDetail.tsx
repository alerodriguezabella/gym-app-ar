import { useEffect, useState } from 'react';
import { getWorkout, WorkoutType } from '../services/workoutsService';
import { useParams } from "react-router-dom";
import WorkoutExercise from '../components/WorkoutExercise';
import BackButton from '../components/BackButton';

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
      <div style={{display: 'flex', alignItems: 'center' }}>
        <BackButton/>
        <h1 style={{margin: 0}}>{workout.name}</h1>
      </div>
      <div style={{marginTop: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        {workout.workoutExercises.map((workoutExercise) => 
          <WorkoutExercise key={workoutExercise._id} workoutExercise={workoutExercise}/>
        )}
      </div>
    </div>
  );
}

export default WorkoutDetail;
