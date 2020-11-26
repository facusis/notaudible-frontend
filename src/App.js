import './App.css';
import React from 'react';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Biblioteca from './components/Biblioteca/Biblioteca';
import UserPanel from './components/UserPanel/UserPanel';
import Home from './components/Home/Home';
import UploadBook from './components/UploadBook/UploadBook';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {BrowserRouter,
Link,
Switch,
Route,
Redirect
} from 'react-router-dom';
import {HOME, BIBLIOTECA, REGISTER, LOGIN, PERFIL, UPLOADBOOK} from './routes';


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
          <PrivateRoute path={PERFIL} component={UserPanel} />
          <PrivateRoute path={UPLOADBOOK} component={UploadBook} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
