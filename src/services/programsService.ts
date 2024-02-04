import axios from 'axios';
import { WorkoutType } from './workoutsService';

export type ProgramPhaseType = {
    _id: string;
    name: string;
    workouts: WorkoutType[];
}  

export type ProgramType = {
    _id: string;
    name: string;
    programPhases: ProgramPhaseType[];
}

const url = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

export async function getPrograms(): Promise<ProgramType[]> {
  const response = await axios
    .request({
      method: 'GET',
		  url: `${url}/programs`,
    })
  return response.data.data as ProgramType[];
}

export async function getProgram(id: string): Promise<ProgramType> {
  const response = await axios
    .request({
      method: 'GET',
		  url: `${url}/programs/${id}`,
    })
  return response.data.data as ProgramType;
}
