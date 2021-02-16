import React, {useContext} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Auth from './components/Auth.js';
import Profile from './components/Profile.js';
import Public from './components/Public.js';
import { UserContext } from './context/UserProvider.js'
//import { IssueCommentContext } from './context/IssueCommentContext.js'

import './css/styles.css';



function App(props) {
  //const { username } = useContext(IssueCommentContext)
  const { voteNum, username } = props 

  
  const { token, user } = useContext(UserContext)
  console.log("App.js", user)
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
        render={() => token ? <Profile user={user} username={username} voteNum={voteNum}/> : <Auth />}
        />
        <Route 
        path="/public"
        render={()=> <Public  user={user} username={username} voteNum={voteNum}/>}
        />
      </Switch>
    </div>
  );
}

export default App;
