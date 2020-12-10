import './App.css';
import React, { useState } from 'react';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import Biblioteca from './components/Biblioteca/Biblioteca';
import InfoAudioLibro from './components/InfoAudioLibro/InfoAudioLibro';
import UserPanel from './components/UserPanel/UserPanel';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Forgetpass from './components/Login/ForgetPass';
import PageUploadBook from './components/UploadBook/PageUploadBook';
import Footer from './components/Footer/Footer';
import LogedContext from './LogedContext';
import {BrowserRouter,
Switch,
Route
} from 'react-router-dom';
import {HOME, BIBLIOTECA, REGISTER, LOGIN, PERFIL, UPLOADBOOK, FORGETPASS, INFOAUDIOLIBRO} from './routes';
import { isLogin } from './utils/loginUtils';

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
            <PrivateRoute path={INFOAUDIOLIBRO} exact component={InfoAudioLibro} />
            <Route path={FORGETPASS} exact component={Forgetpass} />
          </Switch>
        </LogedContext.Provider>
      </BrowserRouter>
      <div className="content-wrap">  
      </div>
      <Footer />
    </div>
  );
}
export default App;
