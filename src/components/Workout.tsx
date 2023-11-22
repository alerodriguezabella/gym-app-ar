import { WorkoutType } from "../services/workoutsService";

export default function Workout({workout}: {workout:WorkoutType}) {
  return (
  <div>
    <h1>{workout.name}</h1>
  </div>
  )
}