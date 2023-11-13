import { SessionType } from "../services/sessionsService";
import Exercise from "./Exercise";

export default function Session({session}: {session:SessionType}) {
  return (
  <div>
    <h1>{session.name}</h1>
    {session.exercises.map((exercise) => <Exercise exercise={exercise}/>)}
  </div>
  )
}