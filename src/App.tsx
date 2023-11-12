import React, { useEffect, useState } from 'react';
import './App.css';
import Session from './components/Session';
import { getSessions, SessionType } from './services/sessionsService';

function App() {
  const [sessions, setSessions] = useState([] as SessionType[]);

  useEffect(() => {
    async function fetchExercises(){
      const result = await getSessions()
      setSessions(result);
    }
    fetchExercises()
  }, [])

  return (
    <div>
      {sessions.map((session) => <Session key={session.id} session={session}/>)}
    </div>
  );
}

export default App;
