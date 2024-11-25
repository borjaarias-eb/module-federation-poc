import React from 'react';
import './App.css';

const App = ({name}) => {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to {name}!
      </header>
    </div>
  );
}

export default App;
