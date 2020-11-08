import './App.css';
import React from 'react';
import Login from './components/Login/Login';
import Navbar from './components/Navbar';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import {BrowserRouter,
Link,
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
        <Route path="/home">
          <Home />
        </Route>
      </Switch>

      </BrowserRouter>
      <div>      
      </div>
      
     
    </div>
  );
}

export default App;
