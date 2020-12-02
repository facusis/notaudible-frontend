import './App.css';
import React from 'react';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Biblioteca from './components/Biblioteca/Biblioteca';
import InfoAudioLibro from './components/Biblioteca/InfoAudioLibro/InfoAudioLibro';
import UserPanel from './components/UserPanel/UserPanel';
import Home from './components/Home/Home';
import UploadBook from './components/UploadBook/UploadBook';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Forgetpass from './components/Login/ForgetPass';
import {BrowserRouter,
Switch,
Route
} from 'react-router-dom';
import {HOME, BIBLIOTECA, REGISTER, LOGIN, PERFIL, UPLOADBOOK, FORGETPASS, INFOAUDIOLIBRO} from './routes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={HOME} exact component={Home} />
          <Route path={LOGIN} exact component={Login} />
          <Route path={REGISTER} component={Register} />
          <Route path={BIBLIOTECA} exact component={Biblioteca} />
          <PrivateRoute path={PERFIL} component={UserPanel} />
          <PrivateRoute path={UPLOADBOOK} component={UploadBook} />
          <PrivateRoute path={INFOAUDIOLIBRO} exact component={InfoAudioLibro} />
          <Route path={FORGETPASS} exact component={Forgetpass} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
