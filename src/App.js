import './App.css';
import React from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import {BrowserRouter,
Switch,
Route
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
      </BrowserRouter>
      
      
     
    </div>
  );
}

export default App;
