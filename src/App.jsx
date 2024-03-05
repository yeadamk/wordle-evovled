import './App.css';
import Auth from './Auth';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamePlay from './GamePlay';

function App() {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    console.log(userId, userName);
  }, [userId, userName]);
  return (
    <Router>
      <Routes>
        <Route path='/auth' element={<Auth setUserId={setUserId} setUserName={setUserName} />} />
        <Route path='/gameplay' element={<GamePlay userId={userId} userName={userName} />} />
      </Routes>
    </Router>
  );
}

export default App;
