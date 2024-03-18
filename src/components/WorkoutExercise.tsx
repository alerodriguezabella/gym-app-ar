import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { WorkoutExerciseType } from "../services/workoutsService";

export default function WorkoutExercise({workoutExercise}: {workoutExercise:WorkoutExerciseType}) {
  return (
    <Card sx={{ width: 345, m: 2,  backgroundColor: '#e9ecef'}}>
      <CardMedia
        component="iframe"
        image={workoutExercise.exercise.videoUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {workoutExercise.exercise.name}
        </Typography>
        {workoutExercise.rpe ? 
          <Typography gutterBottom variant="h5" component="div">
            RPE: {workoutExercise.rpe}
          </Typography>
        : null}
        <Typography variant="h6" color="text.secondary">
          Sets and reps:
        </Typography> 
        <div style={{display: 'flex'}}>
          {workoutExercise.exerciseSets.map((set, index) => 
            <Typography variant="h6" color={set.isWarmUp ? '#fca311' : 'text.secondary'} style={{marginLeft: '5px'}}>
              {index !== 0 ? `| ${set.repetitions}` : `${set.repetitions}`}
            </Typography> 
          )}
        </div>
        <Typography variant="body2" color="text.secondary">
          {workoutExercise.notes ? <p>Notes: {workoutExercise.notes.toLowerCase()}</p> : null}
        </Typography>
      </CardContent>
    </Card>
  );
}