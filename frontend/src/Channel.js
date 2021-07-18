import React from 'react';
import './Channel.css';

/**
* @param {Object} props - Channel Name
* @return {JSX} - Channel Page
*/
function Channel(props) {
  return (
    <div>
      <div id='channel-head'>
        <div id='channel-type'>
          {props.name}
        </div>
      </div>
      <div id='channel-main'>
      </div>
    </div>
  );
}

export default Channel;
