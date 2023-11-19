import axios from 'axios';

export type ExerciseType = {
  _id: string;
  name: string;
  videoUrl: string;
  set: number;
  reps: number;
}

// export type ExerciseTypeTwo = {
//   id: number;
//   exercise_id: number;
//   user_id: number;
//   session_id: number;
//   weight: number;
//   set: number;
//   reps: number;
// }

export async function getExercises(): Promise<ExerciseType[]> {
  const response = await axios
    .request({
      method: 'GET',
		  url: 'http://localhost:3000/exercises',
    })
  return response.data.data as ExerciseType[];
}
