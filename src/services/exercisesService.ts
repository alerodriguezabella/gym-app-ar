import axios from 'axios';

export type ExerciseType = {
  _id: string;
  name: string;
  videoUrl: string;
}

const url = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

export async function getExercises(): Promise<ExerciseType[]> {
  const response = await axios
    .request({
      method: 'GET',
		  url: `${url}/exercises`,
    })
  return response.data.data as ExerciseType[];
}
