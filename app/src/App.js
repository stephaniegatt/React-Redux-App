import React, { useEffect } from 'react';
import './App.css';
import Superhero from './components/Superhero';

function App() {
  return (
    <div className="App">
      <h1>Random SuperHero!</h1>
      <Superhero />
    </div>
  );
}

export default App;
