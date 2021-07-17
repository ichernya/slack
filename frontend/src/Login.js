import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './Login.css';

/**
* Simple component with no state.
*
* @return {object} JSX
*/
function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div id='login-container'>
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
          <span id='checkbox'><Checkbox color='white'/></span>
          <span id='remember-text'>Remember me</span>
        </span>
        <button id='sign-button'>Sign in</button>
      </div>
    </div>
  );
}

export default Login;
