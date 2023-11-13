import axios from 'axios';

export type ExerciseType = {
  id: number;
  name: string;
  videoUrl: string;
  set: number;
  reps: number;
}

export async function getExercises(): Promise<ExerciseType[]> {
  const response = await axios
    .request({
      method: 'GET',
		  url: 'http://localhost:3000/exercises',
    })
  return response.data.data as ExerciseType[];
}
