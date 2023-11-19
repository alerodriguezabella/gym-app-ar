import axios from 'axios';
import { ExerciseType } from './exercisesService';

export type WorkoutType = {
  _id: string;
  // user_id: number;
  name: string;
  exercises: ExerciseType[]
}

export async function getWorkouts(): Promise<WorkoutType[]> {
  const response = await axios
    .request({
      method: 'GET',
		  url: 'http://localhost:3000/workouts',
    })
  return response.data.data as WorkoutType[];
}

export async function getWorkout(id: string): Promise<WorkoutType> {
  const response = await axios
    .request({
      method: 'GET',
		  url: `http://localhost:3000/workouts/${id}`,
    })
  return response.data.data as WorkoutType;
}
