import React, {useEffect} from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Channel.css';

/*
~ SOURCES ~
fetch() - From Authenticated Books Example
useEffect() - https://reactjs.org/docs/hooks-effect.html
handleDate() - From Keaton's Assignment 5
AccountCircleIcon - https://material-ui.com/components/material-icons/
*/

/**
* @param {Object} props - Channel Name
* @return {JSX} - Channel Page
*/
function Channel(props) {
  const [addedMessage, setAddedMessage] = React.useState('');
  const [currMessages, setCurrMessages] = React.useState([]);
  useEffect(() => {
    if (props.name) {
      const second = `channel=${props.name}&workspace=${props.workspace}`;
      fetch(`http://localhost:3010/v0/messages?` + second)
        .then(async (res) => {
          const messageArray = [];
          if (res.status === 200) {
            const foundMessages = await res.json();
            for (let i = 0; i < foundMessages.length; i++) {
              const message = foundMessages[i];
              if (Object.keys(message.messagebody).length !== 0) {
                messageArray.push(createMessage(message));
              }
            }
            setCurrMessages(messageArray);
          }
        },
        )
        .catch((err) => err);
    }
  }, [props.workspace, props.name]);
  /**
  * @param {JSON} obj - Message Object with Information
  * @return {JSX} - JSX for Message
  */
  function createMessage(obj) {
    const displayName = obj.curuser;
    const displayTime = obj.senttime;
    return (
      <div id='message'>
        <div id = "pic">
          <AccountCircleIcon fontSize='inherit' id='profile-pic'/>
        </div>
        <div id ="container">
          <div id ="name"class="child">
            {displayName}
          </div>
          <div id ="time" class="child">
            {handleDate(displayTime)}
          </div>
        </div>
        <br>
        </br>
        <br>
        </br>
        <div>
          {obj.messagebody}
        </div>
      </div>
    );
  }
  /**
  * @param {*} newMessage - Message from User
  */
  function addMessage(newMessage) {
    const curTime = (new Date().toISOString().split('.')[0] +'Z');
    setAddedMessage('');
    const body = {
      username: 'user1',
      message: newMessage,
      time: curTime,
      channel: props.name,
      workspace: props.workspace,
      replies: 0,
    };
    fetch('http://localhost:3010/v0/messages', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((err) => err);
    const newMSG = createMessage({
      curworkspace: props.workspace,
      curchannel: props.name,
      curuser: 'user1',
      senttime: curTime,
      replies: 0,
      messagebody: newMessage,
    });
    setCurrMessages((array) => [...array, newMSG]);
  }
  /**
  * @param {String} date - Email's date
  * @return {String} - Date formatted
  */
  function handleDate(date) {
    const monthsAbrev = ['PlaceHolder', 'Jan', 'Feb', 'Mar', 'Apr',
      'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const firstHalf = '([0-9]+)-([0-9]+)-([0-9]+)';
    const secondHalf = 'T([0-9]+):([0-9]+):([0-9]+)Z';
    const dateRegex = new RegExp(firstHalf + secondHalf);
    const matches = date.match(dateRegex);
    if (currentYear !== Number(matches[1])) {
      return Number(matches[1]);
    } else if (currentMonth === Number(matches[2]) &&
      currentDay === Number(matches[3])) {
      const militaryHour = Number(matches[4]);
      const normalHour = militaryHour > 12 ? militaryHour % 12 : militaryHour;
      return `${normalHour}:${matches[5]}`;
    } else {
      return `${monthsAbrev[Number(matches[2])]} ${Number(matches[3])}`;
    }
  }
  return (
    <div>
      <div id='channel-head'>
        <div id='channel-type'>
          {props.name}
        </div>
      </div>
      <div id='dm-main'>
        {currMessages}
        <div id='dm-adder'>
          <input
            id='add-dm'
            type='text'
            onInput={(event)=>setAddedMessage(event.target.value)}
            value={addedMessage}
            placeholder='Send Message'
          />
        </div>
        <button id='dm-button'
          onClick={()=>addMessage(addedMessage)}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Channel;
