import React from 'react';
import Login from './Login';
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
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
