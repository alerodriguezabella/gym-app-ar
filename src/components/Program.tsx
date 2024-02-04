import { ProgramType } from "../services/programsService";

export default function Program({program}: {program:ProgramType}) {
  return (
  <div>
    <h1>{program.name}</h1>
  </div>
  )
}