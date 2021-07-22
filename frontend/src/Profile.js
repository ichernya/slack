import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Profile.css';

/*
~ SOURCES ~
fetch() - From Authenticated Books Example
useEffect() - https://reactjs.org/docs/hooks-effect.html
AccountCircleIcon - https://material-ui.com/components/material-icons/
*/

/**
* @param {Object} props - Props from Parent
* @return {JSX} - Profile Page for Application
*/
function Profile(props) {
  const [online, setOnline] = React.useState('Active');
  const [color, setColor] = React.useState('green');
  /**
  */
  function changeStatus() {
    if (online === 'Active') {
      setOnline('Away');
      setColor('red');
    } else {
      setOnline('Active');
      setColor('green');
    }
  }
  return (
    <div id='profile-body'>
      <div>
        <div id='main-container'>
          <AccountCircleIcon fontSize='inherit' id='profile-pic'/>
          <div id='username'>
            <span>{props.username}</span>
            <div id='online-container'>
              <span id='circle' style={{backgroundColor: color}}></span>
              <span id='online'>{online}</span>
            </div>
          </div>
        </div>
        <div id='toggle-status' onClick={()=>changeStatus()}>
          Set yourself as {online === 'Active' ? 'AWAY' : 'ACTIVE'}
        </div>
        <div id='border'></div>
        <input
          id='status-box'
          type='text'
          placeholder='Update your status'
        />
      </div>
      <div id='sign-out'>Sign out of CSE183 Summer 2021</div>
    </div>
  );
}

export default Profile;
