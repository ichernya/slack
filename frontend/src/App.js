import React from 'react';
import Home from './Home';
import Checkbox from '@material-ui/core/Checkbox';
import './App.css';
// import Emoji from './Emoji';

/**
 * Simple component with no state.
 *
 * @param {function} setDummy set the dummy state
 */
// function getDummy(setDummy) {
//   fetch('http://localhost:3010/v0/dummy')
//     .then((response) => {
//       if (!response.ok) {
//         throw response;
//       }
//       return response.json();
//     })
//     .then((json) => {
//       setDummy(json.message);
//     })
//     .catch((error) => {
//       setDummy(error.toString());
//     });
// }

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
  */
  function changePage() {
    setLoginDisplay('none');
    setHomeDisplay('block');
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
            <span id='checkbox'><Checkbox color='white'/></span>
            <span id='remember-text'>Remember me</span>
          </span>
          <button id='sign-button'
            onClick={()=>changePage()}>Sign in</button>
        </div>
      </div>
      <div style={{display: homeDisplay}}><Home /></div>
    </div>
  );
}

export default App;
