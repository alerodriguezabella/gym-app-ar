import axios from 'axios';

export type ExerciseType = {
  _id: string;
  name: string;
  videoUrl: string;
}

export async function getExercises(): Promise<ExerciseType[]> {
  const response = await axios
    .request({
      method: 'GET',
		  url: 'http://localhost:3000/exercises',
    })
  return response.data.data as ExerciseType[];
}
