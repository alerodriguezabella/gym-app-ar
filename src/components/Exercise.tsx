import { ExerciseType } from "../services/exercisesService";

export default function Exercise({exercise}: {exercise:ExerciseType}) {
  return (
  <div>
      <div key={exercise._id}>
        <ul>{exercise.name}
          {/* <li>Set: {exercise.set}</li>
          <li>Reps: {exercise.reps}</li> */}
        </ul>
      </div>
      
  </div>
  )
}