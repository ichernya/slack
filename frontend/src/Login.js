import React from 'react';

/**
* Simple component with no state.
*
* @return {object} JSX
*/
function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div>
      <input
        type='text'
        onInput={(event)=>setUsername(event.target.value)}
        value={username}
        placeholder='username'
      />
      <input
        type='text'
        onInput={(event)=>setPassword(event.target.value)}
        value={password}
        placeholder='password'
      />
    </div>
  );
}

export default Login;
