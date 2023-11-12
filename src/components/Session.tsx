import { SessionType } from "../services/sessionsService";


export default function Session({session}: {session:SessionType}) {
  return (
  <div>
    <h1>{session.name}</h1>
    {session.exercises.map((exercise) => <p key={exercise.id}>{exercise.name}</p>)}
  </div>
  )
}