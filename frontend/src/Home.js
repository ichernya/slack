import React, {useEffect} from 'react';
import Profile from './Profile.js';
import Channel from './Channel.js';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import AccountCircleOutlinedIcon from
  '@material-ui/icons/AccountCircleOutlined';
import './Home.css';

const exampleWorkspaces = ['CSE183 Summer 2020', 'CSE183 Summer 2019',
  'CSE183 Summer 2021'];

/**
* @param {Object} props - Props from parent
* @return {JSX} - Home Page for Application
*/
function Home(props) {
  const username = props.username;
  const [workspace, setWorkspace] = React.useState('CSE183 Summer 2021');
  const [workspaceDisplay, setWorkspaceDisplay] = React.useState('none');
  const [channelDisplay, setChannelDisplay] = React.useState('none');
  const [channelChosen, setChannelChosen] = React.useState('none');
  const [channelName, setChannelName] = React.useState('');
  const [directDisplay, setDirectDisplay] = React.useState('none');
  const [messageDisplay, setMessageDisplay] = React.useState('none');
  const [atDisplay, setAtDisplay] = React.useState('none');
  const [searchDisplay, setSearchDisplay] = React.useState('none');
  const [profileDisplay, setProfileDisplay] = React.useState('none');
  const [currChannels, setCurrChannels] = React.useState([]);
  const [addedChannel, setAddedChannel] = React.useState('');
  const [addedDM, setAddedDM] = React.useState('');
  const [currDMs, setCurrDMs] = React.useState([]);
  const [addChannelBox, setAddChannelBox] = React.useState('none');
  const [addDMBox, setAddDMBox] = React.useState('none');
  useEffect(() => {
    const first = 'http://localhost:3010/v0/';
    fetch(first + `channel?Workspace=${workspace}`)
      .then(async (res) => {
        const array = [];
        if (res.status === 200) {
          const channels = await res.json();
          for (let i = 0; i < channels.length; i++) {
            const name = channels[i].channelname;
            array.push(createChannel(name));
          }
        }
        setCurrChannels(array);
      },
      )
      .catch((err) => err);
  }, [workspace]);
  useEffect(() => {
    console.log(workspace, 'Initiated');
    setCurrDMs([]);
    const first = 'http://localhost:3010/v0/';
    fetch(first + `dms?user=${username}&workspace=${workspace}`)
      .then(async (res) => {
        if (res.status === 200) {
          const users = await res.json();
          for (let i = 0; i < users.length; i++) {
            fetchFullName(users[i]);
          }
        }
      },
      )
      .catch((err) => err);
  }, [workspace, username]);
  /**
  * @param {String} user - Username for user
  */
  function fetchFullName(user) {
    let fullName;
    const first = 'http://localhost:3010/v0/';
    fetch(first + `name?user=${user}`)
      .then(async (res) => {
        const userData = await res.json();
        fullName = userData.firstName + ' ' + userData.lastName;
        const addedDM = createDM(fullName);
        setCurrDMs((array) => [...array, addedDM]);
      },
      )
      .catch((err) => err);
  }
  /**
  * @return {Array} - Channels for Page
  */
  function generateWorkspaces() {
    const workspaces = [];
    for (let i = 0; i < exampleWorkspaces.length; i++) {
      workspaces[i] = <div id='workspace' onClick={
        ()=>setWorkspace(exampleWorkspaces[i])}>
        <ChevronRightIcon id='workspace-arrow' fontSize='medium'/>
        {exampleWorkspaces[i]}
      </div>;
    }
    return workspaces;
  }
  /**
  * @param {String} name - Name of Channel to Open
  */
  function openChannel(name) {
    setChannelChosen('block');
    setChannelName(name);
  }
  /**
  * @param {String} name - Name of Channel
  * @return {JSX} - Channels for Page
  */
  function createChannel(name) {
    return (
      <div id='channel'
        onClick={()=>openChannel(name)}>
        <ChevronRightIcon id='hash' fontSize='small'/>
        {name}
      </div>
    );
  }
  /**
  * @param {String} name - Name of Channel to Add
  */
  function addChannel(name) {
    fetch('http://localhost:3010/v0/channel', {
      method: 'POST',
      body: JSON.stringify({
        curWorkspace: workspace,
        channelName: name,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((err) => err);
    const addedChannel = createChannel(name);
    setCurrChannels((array) => [...array, addedChannel]);
  }
  /**
  * @param {String} user - Name of user to Add
  */
  function addDM(user) {
    const first = 'http://localhost:3010/v0/';
    fetch(first + `name?user=${user}`)
      .then(async (res) => {
        const userData = await res.json();
        if (res.status !== 200 || user === username) {
          alert('Cannot Locate User!');
          return;
        } else {
          const dmName = userData.firstName + ' ' + userData.lastName;
          fetch('http://localhost:3010/v0/dms', {
            method: 'POST',
            body: JSON.stringify({
              userone: username,
              workspace: workspace,
              usertwo: user,
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          })
            .then((res) => res.json())
            .catch((err) => err);
          const addedDM = createDM(dmName);
          setCurrDMs((array) => [...array, addedDM]);
        }
      })
      .catch((err) => alert('Cannot Locate User!'));
  }
  /**
  */
  function closeChannel() {
    channelDisplay === 'block' ? setChannelDisplay('none') :
      setChannelDisplay('block');
    if (addChannelBox === 'block') {
      setAddChannelBox('none');
    }
  }
  /**
  */
  function closeDM() {
    directDisplay === 'block' ? setDirectDisplay('none') :
      setDirectDisplay('block');
    if (addDMBox === 'block') {
      setAddDMBox('none');
    }
  }
  /**
  * @param {String} name - Full name of user
  * @return {Array} - Direct Messages for Page
  */
  function createDM(name) {
    return (
      <div id='dm'>
        <AccountCircleOutlinedIcon id='hash' fontSize='small'/>
        {name}
      </div>
    );
  }
  /**
  */
  function closeAll() {
    setMessageDisplay('none');
    setAtDisplay('none');
    setSearchDisplay('none');
    setProfileDisplay('none');
    setChannelChosen('none');
    setDirectDisplay('none');
    setChannelDisplay('none');
    setAddDMBox('none');
    setAddChannelBox('none');
  }
  /**
  * @return {Array} - Direct Messages for Page
  */
  function generateHeader() {
    return (
      <div id='special-header'>
        <ArrowBackOutlinedIcon onClick={()=>closeAll()} id='special-arrow'/>
      </div>
    );
  }
  return (
    <div>
      <div id='chosen-channel' style={{display: channelChosen}}>
        {generateHeader()}
        <Channel name={channelName}/>
      </div>
      <div style={{display: messageDisplay}}>
        {generateHeader()}
      </div>
      <div style={{display: atDisplay}}>
        {generateHeader()}
      </div>
      <div style={{display: searchDisplay}}>
        {generateHeader()}
      </div>
      <div style={{display: profileDisplay}}>
        {generateHeader()}
        <Profile username={username}/>
      </div>
      <div id='header'>
        {workspace}
        <ArrowDropDownCircleIcon id='header-arrow'
          onClick={()=> workspaceDisplay === 'block' ?
            setWorkspaceDisplay('none') : setWorkspaceDisplay('block')}/>
      </div>
      <div id='workspace-body' style={{display: workspaceDisplay}}>
        {generateWorkspaces()}
      </div>
      <div id='channel-body'>
        <div id='body-header'>
          <ArrowDropDownCircleIcon id='body-arrow' fontSize='small'
            onClick={()=>closeChannel()}/>
          Channels
        </div>
        <div style={{display: channelDisplay}}>
          {currChannels}
          <div id='channel'>
            <AddBoxOutlinedIcon id='hash' fontSize='small'
              onClick={()=>addChannelBox === 'none' ?
                setAddChannelBox('block') : setAddChannelBox('none')}/>
            Add Channel
          </div>
        </div>
        <div id='body-header'>
          <ArrowDropDownCircleIcon id='body-arrow' fontSize='small'
            onClick={()=> closeDM()}/>
          Direct Messages
        </div>
        <div style={{display: directDisplay}}>
          {currDMs}
          <div id='dm'>
            <AddBoxOutlinedIcon id='hash' fontSize='small'
              onClick={()=>addDMBox === 'none' ?
                setAddDMBox('block') : setAddDMBox('none')}/>
            Add Teammate
          </div>
        </div>
        <div id='channel-adder' style={{display: addChannelBox}}>
          <input
            id='add-channel'
            type='text'
            onInput={(event)=>setAddedChannel(event.target.value)}
            value={addedChannel}
            placeholder='Add Channel'
          />
        </div>
        <div id='channel-adder' style={{display: addDMBox}}>
          <input
            id='add-channel'
            type='text'
            onInput={(event)=>setAddedDM(event.target.value)}
            value={addedDM}
            placeholder='Add Direct Message With User'
          />
        </div>
        <button id='channel-button' style={{display: addChannelBox}}
          onClick={()=>addChannel(addedChannel)}>
          Add
        </button>
        <button id='dm-button' style={{display: addDMBox}}
          onClick={()=>addDM(addedDM)}>
          Add
        </button>
      </div>
      <BottomNavigation id='navigation'>
        <BottomNavigationAction icon={<HomeOutlinedIcon/>}
          onClick={()=>closeAll()}/>
        <BottomNavigationAction icon={<ForumOutlinedIcon/>}
          onClick={()=> {
            closeAll();
            messageDisplay === 'block' ?
              setMessageDisplay('none') : setMessageDisplay('block');
          }}/>
        <BottomNavigationAction icon={<AlternateEmailIcon/>}
          onClick={()=> {
            closeAll();
            atDisplay === 'block' ?
              setAtDisplay('none') : setAtDisplay('block');
          }}/>
        <BottomNavigationAction icon={<SearchIcon/>}
          onClick={()=> {
            closeAll();
            searchDisplay === 'block' ?
              setSearchDisplay('none') : setSearchDisplay('block');
          }}/>
        <BottomNavigationAction icon={<PermIdentityIcon/>}
          onClick={()=> {
            closeAll();
            profileDisplay === 'block' ?
              setProfileDisplay('none') : setProfileDisplay('block');
          }}/>
      </BottomNavigation>
    </div>
  );
}

export default Home;
