import { WorkoutType } from "../services/workoutsService";

export default function Workout({workout}: {workout:WorkoutType}) {
  return (
  <div>
    <h3>{workout.name}</h3>
  </div>
  )
}