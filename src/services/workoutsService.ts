import axios from 'axios';
import { ExerciseType } from './exercisesService';

export type ExerciseSetType = {
  _id: string;
  repetitions: number;
  weight: number;
}

export type WorkoutExerciseType = {
  _id: string;
  exercise: ExerciseType;
  exerciseSets: ExerciseSetType[];
  notes?: string;
}

export type WorkoutType = {
  _id: string;
  name: string;
  workoutExercises: WorkoutExerciseType[];
}

const url = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

export async function getWorkouts(): Promise<WorkoutType[]> {
  const response = await axios
    .request({
      method: 'GET',
		  url: `${url}/workouts`,
    })
  return response.data.data as WorkoutType[];
}

export async function getWorkout(id: string): Promise<WorkoutType> {
  const response = await axios
    .request({
      method: 'GET',
		  url: `${url}/workouts/${id}`,
    })
  return response.data.data as WorkoutType;
}
