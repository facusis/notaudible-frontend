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
<<<<<<< HEAD
import {HOME, BIBLIOTECA, REGISTER, LOGIN, UPLOAD} from './routes';
=======
import {HOME, BIBLIOTECA, REGISTER, LOGIN, PERFIL, UPLOADBOOK} from './routes';

>>>>>>> dbe687704ffc10a8b6d767d9272d52aa74f069e6

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
<<<<<<< HEAD
          <Route path={UPLOAD} component={Library} />
=======
          <PrivateRoute path={PERFIL} component={UserPanel} />
          <PrivateRoute path={UPLOADBOOK} component={UploadBook} />
>>>>>>> dbe687704ffc10a8b6d767d9272d52aa74f069e6
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
