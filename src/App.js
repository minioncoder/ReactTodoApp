import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './main/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todos />
        <p>
          Todo react app for the <code>Purpose to learn</code> react and redux.
        </p>
        </header>
    </div>
  );
}

export default App;
