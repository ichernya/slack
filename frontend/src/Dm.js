import React, {useEffect} from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Dm.css';

/*
~ SOURCES ~
fetch() - From Authenticated Books Example
useEffect() - https://reactjs.org/docs/hooks-effect.html
AccountCircleIcon - https://material-ui.com/components/material-icons/
*/

/**
* @param {Object} props - Channel Name
* @return {JSX} - Channel Page
*/
function Dm(props) {
  const [addedDM, setAddedDM] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [currMessages, setCurrMessages] = React.useState([]);
  useEffect(() => {
    if (props.main) {
      fetchFullName();
    }
  }, [props.main]);
  useEffect(() => {
    if (props.side) {
      const second = `&workspace=${props.workspace}&userSecond=${props.side}`;
      fetch(`http://localhost:3010/v0/dmMessages?user=${props.main}` + second)
        .then(async (res) => {
          const messageArray = [];
          if (res.status === 200) {
            const foundMessages = await res.json();
            for (let i = 0; i < foundMessages.length; i++) {
              const message = foundMessages[i];
              const sentMessages = message.sentmessages;
              if (Object.keys(sentMessages).length !== 0) {
                messageArray.push(createMessage(message));
              }
            }
            setCurrMessages(messageArray);
          }
        },
        )
        .catch((err) => err);
    }
  }, [props.workspace, props.side]);
  /**
  * @param {String} user - Username for user
  */
  function fetchFullName(user) {
    const first = 'http://localhost:3010/v0/';
    fetch(first + `name?user=${props.main}`)
      .then(async (res) => {
        const userData = await res.json();
        const fullNameTemp = userData.firstName + ' ' + userData.lastName;
        setFullName(fullNameTemp);
      },
      )
      .catch((err) => err);
  }
  /**
  * @param {String} newMessage - Message to Add
  */
  function addDM(newMessage) {
    console.log((new Date().toISOString().split('.')[0] +'Z'));
    setAddedDM('');
    const body = {
      userOne: props.main,
      workspace: props.workspace,
      userTwo: props.side,
      sentMessages: {
        sent: props.main,
        received: props.side,
        time: (new Date().toISOString().split('.')[0] +'Z'),
        message: newMessage,
      }};
    fetch('http://localhost:3010/v0/dmMessages', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((err) => err);
    const newDM = createMessage(body);
    setCurrMessages((array) => [...array, newDM]);
  }
  /**
  * @param {JSON} obj - Message Object with Information
  * @return {JSX} - JSX for Message
  */
  function createMessage(obj) {
    const message = (obj.sentMessages) ? obj.sentMessages : obj.sentmessages;
    const displayName = (message.sent === props.main) ? fullName : props.name;
    const displayTime = (message.time);
    return (
      <div id='message'>
      <div id='pic'>
        <AccountCircleIcon fontSize='inherit' id='profile-pic'/>
        </div>
        <div id = 'container'>
        <br>
        </br>
        <div id ='name' class='child'>
        {displayName}
        </div>
        <div id ='time' class='child'>
          {displayTime}
        </div>
        <br>
        </br>
        <br>
        </br>
        </div>
        <div>
          {message.message}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div id='dm-head'>
        <div id='dm-type'>
          {props.name}
        </div>
      </div>
      <div id='dm-main'>
        {currMessages}
        <div id='dm-adder'>
          <input
            id='add-dm'
            type='text'
            onInput={(event)=>setAddedDM(event.target.value)}
            value={addedDM}
            placeholder='Send Message'
          />
        </div>
        <button id='dm-button'
          onClick={()=>addDM(addedDM)}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Dm;
