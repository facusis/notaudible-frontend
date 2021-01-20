import './App.css';
import React, { useState, createContext } from 'react';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Biblioteca from './components/Biblioteca/Biblioteca';
import PageInfoAudioLibro from './components/InfoAudioLibro/PageInfoAudioLibro';
import UserPanel from './components/UserPanel/UserPanel';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Forgetpass from './components/Login/ForgetPass';
import PageUploadBook from './components/UploadBook/PageUploadBook';
import UserProfile from './components/UserProfile/UserProfile';
import Footer from './components/Footer/Footer';
import LogedContext from './LogedContext';
import {BrowserRouter,
Switch,
Route
} from 'react-router-dom';
import {HOME, BIBLIOTECA, REGISTER, LOGIN, PERFIL, UPLOADBOOK, FORGETPASS, INFOAUDIOLIBRO, USERPROFILE} from './routes';
import { isLogin } from './utils/loginUtils';
import {FontAwesomeIcon} from '@fortawesome/fontawesome-free';
import Favorite from './components/Favorites/Favorite';

export const UserContext = createContext();


function App() {

  const [loged, setLoged] = useState(isLogin);
  
  return (
    <div className="App">
      <BrowserRouter>
        <LogedContext.Provider value={{setLoged, loged}}>
          <Navbar />
          <Switch>
            <Route path={HOME} exact component={Home} />
            <Route path={LOGIN} exact component={Login} />
            <Route path={REGISTER} component={Register} />
            <Route path={BIBLIOTECA} exact component={Biblioteca} />
            <PrivateRoute path={PERFIL} component={UserPanel} />
            <PrivateRoute path={UPLOADBOOK} component={PageUploadBook} />
            <PrivateRoute path={INFOAUDIOLIBRO} exact component={PageInfoAudioLibro} />
            <Route path={FORGETPASS} exact component={Forgetpass} />
            <Route path={USERPROFILE} exact component={UserProfile} />

          </Switch>
        </LogedContext.Provider>
      </BrowserRouter>

      <div className="footer">
      <Footer />
      </div>
    </div>
  );
}
export default App;


//<Route path={PUBLICPROFILE} exact component={UserProfile} />//