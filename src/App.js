import './App.css';
import React from 'react';
import Login from './components/Login/Login';
import Library from './components/Library/Library';
import Navbar from './components/Navbar/Navbar';
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
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/library" component={Library} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
