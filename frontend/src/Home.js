import React from 'react';
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

const username = 'Keaton Singer';
const exampleWorkspaces = ['CSE183 Summer 2020', 'CSE183 Summer 2019'];
// const exampleChannels = ['Assignment 1', 'Assignment 2'];
const exampleDMs = ['Jimbo McGee', 'Dude Man'];

/**
* @return {JSX} - Home Page for Application
*/
function Home() {
  const [workspaceDisplay, setWorkspaceDisplay] = React.useState('none');
  const [channelDisplay, setChannelDisplay] = React.useState('none');
  const [channelChosen, setChannelChosen] = React.useState('none');
  const [channelName, setChannelName] = React.useState('');
  const [directDisplay, setDirectDisplay] = React.useState('none');
  const [messageDisplay, setMessageDisplay] = React.useState('none');
  const [atDisplay, setAtDisplay] = React.useState('none');
  const [searchDisplay, setSearchDisplay] = React.useState('none');
  const [profileDisplay, setProfileDisplay] = React.useState('none');
  const [currentChannels, setCurrentChannels] = React.useState([]);
  getChannels('CSE183 SUMMER 2021');
  /**
  * @param {String} workspace - Workspace User is in
  */
  function getChannels(workspace) {
    const first = 'http://localhost:3010/v0/';
    fetch(first + `channel?Workspace=${workspace}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res);
          for (let i = 0; i < res.channels.length; i++) {
            const channel = createChannels(res.channels[i].channelName);
            const existing = currentChannels;
            existing.push(channel);
            setCurrentChannels(existing);
          }
        } else {
          alert('Channels: Something Went Wrong!');
        }
      })
      .catch((err) => err);
  }
  /**
  * @return {Array} - Channels for Page
  */
  function generateWorkspaces() {
    const workspaces = [];
    for (let i = 0; i < exampleWorkspaces.length; i++) {
      workspaces[i] = <div id='workspace'>
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
  function createChannels(name) {
    return (
      <div id='channel' style={{display: channelDisplay}}
        onClick={()=>openChannel(name)}>
        <ChevronRightIcon id='hash' fontSize='small'/>
        {name}
      </div>
    );
  }
  /**
  * @return {Array} - Direct Messages for Page
  */
  function generateDMs() {
    const DMs = [];
    for (let i = 0; i < exampleDMs.length; i++) {
      DMs[i] = <div id='dm' style={{display: directDisplay}}>
        <AccountCircleOutlinedIcon id='hash' fontSize='small'/>
        {exampleDMs[i]}
      </div>;
    }
    return DMs;
  }
  /**
  */
  function closeAll() {
    setMessageDisplay('none');
    setAtDisplay('none');
    setSearchDisplay('none');
    setProfileDisplay('none');
    setChannelChosen('none');
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
        CSE183 Summer 2021
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
            onClick={()=> channelDisplay === 'block' ?
              setChannelDisplay('none') : setChannelDisplay('block')}/>
          Channels
        </div>
        {currentChannels}
        <div id='channel' style={{display: channelDisplay}}>
          <AddBoxOutlinedIcon id='hash' fontSize='small'/>
          Add Channel
        </div>
        <div id='body-header'>
          <ArrowDropDownCircleIcon id='body-arrow' fontSize='small'
            onClick={()=> directDisplay === 'block' ? setDirectDisplay('none') :
              setDirectDisplay('block')}/>
          Direct Messages
        </div>
        {generateDMs()}
        <div id='add-channel' style={{display: directDisplay}}>
          <AddBoxOutlinedIcon id='hash' fontSize='small'/>
          Add Teammate
        </div>
      </div>
      <BottomNavigation id='navigation'>
        <BottomNavigationAction icon={<HomeOutlinedIcon/>}
          onClick={()=>closeAll()}/>
        <BottomNavigationAction icon={<ForumOutlinedIcon/>}
          onClick={()=> messageDisplay === 'block' ?
            setMessageDisplay('none') : setMessageDisplay('block')}/>
        <BottomNavigationAction icon={<AlternateEmailIcon/>}
          onClick={()=> atDisplay === 'block' ?
            setAtDisplay('none') : setAtDisplay('block')}/>
        <BottomNavigationAction icon={<SearchIcon/>}
          onClick={()=> searchDisplay === 'block' ?
            setSearchDisplay('none') : setSearchDisplay('block')}/>
        <BottomNavigationAction icon={<PermIdentityIcon/>}
          onClick={()=> profileDisplay === 'block' ?
            setProfileDisplay('none') : setProfileDisplay('block')}/>
      </BottomNavigation>
    </div>
  );
}

export default Home;
