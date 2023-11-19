import { WorkoutType } from "../services/workoutsService";
import Exercise from "./Exercise";

export default function Workout({workout}: {workout:WorkoutType}) {
  return (
  <div>
    <h1>{workout.name}</h1>
    {workout.exercises.map((exercise) => <Exercise exercise={exercise}/>)}
  </div>
  )
}