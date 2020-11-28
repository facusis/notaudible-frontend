import React from 'react';
import {
    BrowserRouter,
    Link,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import {isLogin} from '../../utils/loginUtils'

const PrivateRoute = ({ component: Component, path }) => (
    <Route path={path} render={() => {
      return isLogin() ? <Component /> : <Redirect to="/" />;
      }}
    />
  )

export default PrivateRoute;