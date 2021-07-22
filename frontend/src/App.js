import React from 'react';
import Home from './Home';
import Checkbox from '@material-ui/core/Checkbox';
import './App.css';

/*
~ SOURCES ~
fetch() - From Authenticated Books Example
Checkbox - https://material-ui.com/components/material-icons/
*/

/**
* Simple component with no state.
*
* @return {object} JSX
*/
function App() {
  const [loginDisplay, setLoginDisplay] = React.useState('block');
  const [homeDisplay, setHomeDisplay] = React.useState('none');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  /**
  * @param {String} username - Username for user
  * @param {String} password - Password for user
  */
  function changePage(username, password) {
    const first = 'http://localhost:3010/v0/';
    fetch(first + `users?username=${username}&password=${password}`)
      .then((res) => {
        if (res.status === 200) {
          setLoginDisplay('none');
          setHomeDisplay('block');
        } else {
          alert('Incorrect Username or Password');
        }
      })
      .catch((err) => err);
  }
  return (
    <div>
      <div id='login-container' style={{display: loginDisplay}}>
        <div id='login-text'>
          Login
        </div>
        <div id='username-container'>
          <input
            id = 'username-input'
            type='text'
            onInput={(event)=>setUsername(event.target.value)}
            value={username}
            placeholder='Username'
          />
        </div>
        <div id='password-container'>
          <input
            id = 'password-input'
            type='text'
            onInput={(event)=>setPassword(event.target.value)}
            value={password}
            placeholder='Password'
          />
        </div>
        <div>
          <span id='remember-container'>
            <span id='checkbox'><Checkbox/></span>
            <span id='remember-text'>Remember me</span>
          </span>
          <button id='sign-button'
            onClick={()=>changePage(username, password)}>Sign in</button>
        </div>
      </div>
      <div style={{display: homeDisplay}}><Home username={username}/></div>
    </div>
  );
}

export default App;
