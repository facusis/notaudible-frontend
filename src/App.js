import './App.css';
import React from 'react';
import Login from './components/Login/Login';
import ForgetPass from './components/Login/ForgetPass'
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Biblioteca from './components/Biblioteca/Biblioteca';
import UserPanel from './components/UserPanel/UserPanel';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Library from './components/Library/Library';
import {BrowserRouter,
Link,
Switch,
Route,
Redirect
} from 'react-router-dom';
import {HOME, BIBLIOTECA, REGISTER, LOGIN, PERFIL} from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Library></Library>
        <Switch>
          <Route path={HOME} exact component={Home} />
          <Route path={LOGIN} component={Login} />
          <Route path={REGISTER} component={Register} />
          <Route path={BIBLIOTECA} component={Biblioteca} />
          <PrivateRoute path={PERFIL} component={UserPanel} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
