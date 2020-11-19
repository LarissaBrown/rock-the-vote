import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Auth from './components/Auth.js';
import Profile from './components/Profile.js';
import Public from './components/Public.js';
import { UserContext } from './context/UserProvider.js'

import './css/styles.css';

function App() {
  const { token } = useContext(UserContext)
  return (
    <div className="App">
      <Navbar  />
      <Switch>
        <Route 
        exact path ="/"
        render={()=> token ? <Redirect to="/profile"/> : <Auth />}
        />
        <Route
        path ="/profile"
        render={() => token ? <Profile /> : <Auth />}
        />
        <Route 
        path="/public"
        render={()=> <Public />}
        />
      </Switch>
    </div>
  );
}

export default App;
