import React, {useEffect} from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Channel.css';

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
            console.log(foundMessages);
            console.log('JUICY');
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
          {displayTime}
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
