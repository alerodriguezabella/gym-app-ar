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

      {/* <Grid container spacing={3} style={{marginTop: '30px'}}>
        {workout.workoutExercises.map((workoutExercise, index) => (
          <Grid item key={index} xs={12} sm={6} md={6} lg={3} xl={3}>
            <WorkoutExercise key={workoutExercise._id} workoutExercise={workoutExercise}/>
          </Grid>
        ))}
      </Grid> */}
    </div>
  );
}

export default WorkoutDetail;
