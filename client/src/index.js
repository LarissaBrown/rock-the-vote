import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import UserProvider from './context/UserProvider'
import IssueCommentProvider from './context/IssueCommentContext'


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <IssueCommentProvider>
          <App />
        </IssueCommentProvider>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

