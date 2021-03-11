import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoggedInContext } from '../../contexts/LoggedInContext.js';

function ProtectedRoute({ component: Component, ...props }) {
  const loggedIn = React.useContext(LoggedInContext);
  return (
    <Route path={props.path}>
      { () => (loggedIn === props.stateLogin
        ? <Component {...props} />
        : <Redirect to={props.redirect} />) }
    </Route>
  );
}

export default ProtectedRoute;
