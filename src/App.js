import './App.css';
import React from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Register />
    </div>
  );
}

export default App;
