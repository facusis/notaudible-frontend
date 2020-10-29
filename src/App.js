import './App.css';
import React from 'react';
import Login from './components/Login';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Logo">
        <img src="logo.jpeg"></img> 
      </div>
    </div>
  );
}

export default App;
