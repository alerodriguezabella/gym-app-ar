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
