import React from 'react';
import './app.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header';
import IsUserRedirect from './utils/routes';
import Home from './pages/Home';
import Login from './pages/Login';
import { useStateValue } from './Store/StateContext';

export interface AppProps {
  
}
 
const App: React.FC<AppProps> = () => {
  const [state, dispatch] =  useStateValue();
  const user =  state.user;

  return (

        <Router>
          <Switch>

            <Route exact path='/login'>
              <Login />
            </Route>


            <IsUserRedirect 
              user={user} 
              loggedInPath={'/login'}  
              path={'/'}
              exact={true}
            >
                <Home />
            </IsUserRedirect>

          </Switch>
        </Router>


  );
}
 
export default App;

