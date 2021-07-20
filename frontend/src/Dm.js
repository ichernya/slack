import React, {useEffect} from 'react';
import './Dm.css';

/**
* @param {Object} props - Channel Name
* @return {JSX} - Channel Page
*/
function Dm(props) {
  const [currMessages, setCurrMessages] = React.useState([]);
  useEffect(() => {
    if (props.side) {
      const second = `&workspace=${props.workspace}&userSecond=${props.side}`;
      fetch(`http://localhost:3010/v0/dmMessages?user=${props.main}` + second)
        .then(async (res) => {
          const messageArray = [];
          if (res.status === 200) {
            const foundMessages = await res.json();
            for (let i = 0; i < foundMessages.length; i++) {
              console.log(foundMessages[i]);
              messageArray.push(createMessage(foundMessages[i]));
            }
            setCurrMessages(messageArray);
          }
        },
        )
        .catch((err) => err);
    }
  }, [props.workspace]);
  /**
  * @param {JSON} object - Message Object with Information
  * @return {JSX} - JSX for Message
  */
  function createMessage(object) {
    const message = object.sentmessages.message;
    return (
      <div id='message'>{message}</div>
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
      </div>
    </div>
  );
}

export default Dm;
