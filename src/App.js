import './App.css';
import React from 'react';
import Login from './components/Login/Login';
import ForgetPass from './components/Login/ForgetPass'
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import {BrowserRouter,
Link,
Switch,
Route
} from 'react-router-dom';
import {HOME, BIBLIOTECA, REGISTER, LOGIN} from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/login/forgetPass" exact component={ForgetPass} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
