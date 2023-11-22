import { ExerciseType } from "../services/exercisesService";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Exercise({exercise}: {exercise:ExerciseType}) {
  return (
    <Card sx={{ maxWidth: 345, mb: 4 }} key={exercise._id}>
      <CardMedia
        component="iframe"
        image={exercise.videoUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {exercise.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Notes: 
        </Typography>
      </CardContent>
    </Card>
  );
}