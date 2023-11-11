import axios from 'axios';

export type Exercise = {
  id: number;
  name: string;
  videoUrl: string;
}

export async function getExercises(): Promise<Exercise[]> {
  const response = await axios
    .request({
      method: 'GET',
		  url: 'http://localhost:3000/exercises',
    })
  return response.data.data as Exercise[];
}
