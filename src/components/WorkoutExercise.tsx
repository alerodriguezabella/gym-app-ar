import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { WorkoutExerciseType } from "../services/workoutsService";

export default function WorkoutExercise({workoutExercise}: {workoutExercise:WorkoutExerciseType}) {
  const sets = workoutExercise.exerciseSets.map(set => `${set.repetitions}x${set.weight}`).join(" | ")

  return (
    <Card sx={{ maxWidth: 345, mb: 4 }}>
      <CardMedia
        component="iframe"
        image={workoutExercise.exercise.videoUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {workoutExercise.exercise.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Sets: {sets} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {workoutExercise.notes ? <p>Notes: {workoutExercise.notes.toLowerCase()}</p> : null}
        </Typography>
      </CardContent>
    </Card>
  );
}