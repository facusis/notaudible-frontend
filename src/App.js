import './App.css';
import React from 'react';
import Login from './components/Login/Login';
import Library from './components/Library/Library';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Biblioteca from './components/Biblioteca/Biblioteca';
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
          <Route path={HOME} exact component={Home} />
          <Route path={LOGIN} component={Login} />
          <Route path={REGISTER} component={Register} />
          <Route path={BIBLIOTECA} component={Biblioteca} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
