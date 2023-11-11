import React, { useEffect, useState } from 'react';
import './App.css';
import { getExercises, Exercise } from './services/exercisesServices';

function App() {
  const [exercises, setExercises] = useState([] as Exercise[]);

  useEffect(() => {
    async function fetchExercises(){
      const result = await getExercises()
      setExercises(result);
    }
    fetchExercises()
  }, [])

  console.log(exercises)
  return (
    <div>
      {exercises.map((exercise) => <p key={exercise.id}>{exercise.name}</p>)}
    </div>
  );
}

export default App;
