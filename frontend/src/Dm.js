import React from 'react';
import './Dm.css';

/**
* @param {Object} props - Channel Name
* @return {JSX} - Channel Page
*/
function Dm(props) {
  console.log(props.workspace, 'workspace');
  console.log(props.name, 'name');
  console.log(props.main, 'main');
  console.log(props.side, 'side');
  // const [currMessages, setCurrMessages] = React.useState([]);
  return (
    <div>
      <div id='dm-head'>
        <div id='dm-type'>
          {props.name}
        </div>
      </div>
      <div id='dm-main'>
        Hello
      </div>
    </div>
  );
}

export default Dm;
