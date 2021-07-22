import React, {useEffect} from 'react';
import Profile from './Profile.js';
import Channel from './Channel.js';
import Dm from './Dm.js';
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

/*
~ SOURCES ~
fetch() - From Authenticated Books Example
useEffect() - https://reactjs.org/docs/hooks-effect.html
BottomNavigation - https://material-ui.com/components/material-icons/
BottomNavigationAction - https://material-ui.com/components/material-icons/
HomeOutlinedIcon - https://material-ui.com/components/material-icons/
ForumOutlinedIcon - https://material-ui.com/components/material-icons/
AlternateEmailIcon - https://material-ui.com/components/material-icons/
SearchIcon - https://material-ui.com/components/material-icons/
PermIdentityIcon - https://material-ui.com/components/material-icons/
ArrowDropDownCircleIcon - https://material-ui.com/components/material-icons/
ChevronRightIcon - https://material-ui.com/components/material-icons/
AddBoxOutlinedIcon - https://material-ui.com/components/material-icons/
ArrowBackOutlinedIcon - https://material-ui.com/components/material-icons/
AccountCircleOutlinedIcon - https://material-ui.com/components/material-icons/
*/

/**
* @param {Object} props - Props from parent
* @return {JSX} - Home Page for Application
*/
function Home(props) {
  const username = props.username;
  const [sideName, setSideName] = React.useState('');
  const [workspaces, setWorkspaces] = React.useState([]);
  const [workspace, setWorkspace] = React.useState('');
  const [workspaceDisplay, setWorkspaceDisplay] = React.useState('none');
  const [channelDisplay, setChannelDisplay] = React.useState('block');
  const [channelChosen, setChannelChosen] = React.useState('none');
  const [dmChosen, setDMChosen] = React.useState('none');
  const [channelName, setChannelName] = React.useState('');
  const [dmName, setDMName] = React.useState('');
  const [directDisplay, setDirectDisplay] = React.useState('block');
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
    fetch('http://localhost:3010/v0/workspace')
      .then(async (res) => {
        const arrayWork = [];
        if (res.status === 200) {
          const foundWorkspaces = await res.json();
          for (let i = 0; i < foundWorkspaces.length; i++) {
            const workspacename = foundWorkspaces[i].workspacename;
            if (workspacename !== workspace) {
              arrayWork.push(createWorkspaces(workspacename));
            }
          }
          setWorkspaces(arrayWork);
        }
      },
      )
      .catch((err) => err);
  }, [workspace]);
  useEffect(() => {
    if (workspace) {
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
    }
  }, [workspace]);
  useEffect(() => {
    if (username && workspace) {
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
    }
  }, [workspace, username]);
  useEffect(() => {
    if (workspace) {
      fetch('http://localhost:3010/v0/name', {
        method: 'PUT',
        body: JSON.stringify({
          user: username,
          workspace: workspace,
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .catch((err) => err);
    }
  }, [workspace]);
  useEffect(()=>{
    if (username) {
      const first = 'http://localhost:3010/v0/';
      fetch(first + `name?user=${username}`)
        .then(async (res) => {
          const userData = await res.json();
          setWorkspace(userData.workspace);
        },
        )
        .catch((err) => err);
    }
  }, [username]);
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
        const addedDM = createDM(fullName, user);
        setCurrDMs((array) => [...array, addedDM]);
      },
      )
      .catch((err) => err);
  }
  /**
  * @param {String} string - Name of workspace
  * @return {JSX} - Workspace for Page
  */
  function createWorkspaces(string) {
    return (
      <div id='workspace' onClick={()=>{
        setWorkspaceDisplay('none');
        setWorkspace(string);
        setDirectDisplay('block');
        setChannelDisplay('block');
      }}>
        <ChevronRightIcon id='workspace-arrow' fontSize='medium'/>
        {string}
      </div>
    );
  }
  /**
  * @param {String} name - Name of Channel to Open
  */
  function openChannel(name) {
    setChannelChosen('block');
    setChannelName(name);
  }
  /**
  * @param {String} fullName - Full name of Side Username
  * @param {String} side - Name of Side Username
  */
  function openDM(fullName, side) {
    setDMChosen('block');
    setDMName(fullName);
    setSideName(side);
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
          const addedDM = createDM(dmName, user);
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
  * @param {String} side - Name of receiving user
  * @return {Array} - Direct Messages for Page
  */
  function createDM(name, side) {
    return (
      <div id='dm'
        onClick={()=>openDM(name, side)}>
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
    setDMChosen('none');
    setChannelChosen('none');
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
        <Channel workspace={workspace} name={channelName}
          main={username}/>
      </div>
      <div id='chosen-channel' style={{display: dmChosen}}>
        {generateHeader()}
        <Dm workspace={workspace} name={dmName}
          main={username} side={sideName}/>
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
          onClick={()=> {
            closeAll();
            workspaceDisplay === 'block' ?
              setWorkspaceDisplay('none') : setWorkspaceDisplay('block');
          }}/>
      </div>
      <div id='workspace-body' style={{display: workspaceDisplay}}>
        {workspaces}
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
          onClick={()=>{
            addChannel(addedChannel);
            setAddChannelBox('none');
          }}>
          Add
        </button>
        <button id='dm-button' style={{display: addDMBox}}
          onClick={()=>{
            addDM(addedDM);
            setAddDMBox('none');
          }}>
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
