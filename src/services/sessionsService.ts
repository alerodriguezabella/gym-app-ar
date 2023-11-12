import axios from 'axios';
import { ExerciseType } from './exercisesService';

export type SessionType = {
  id: number;
  name: string;
  exercises: ExerciseType[]
}

export async function getSessions(): Promise<SessionType[]> {
  const response = await axios
    .request({
      method: 'GET',
		  url: 'http://localhost:3000/sessions',
    })
  return response.data.data as SessionType[];
}
