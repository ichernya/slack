import React from 'react';
import Profile from './Profile.js';
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
const exampleChannels = ['Assignment 1', 'Assignment 2'];
const exampleDMs = ['Jimbo McGee', 'Dude Man'];

/**
* @return {JSX} - Home Page for Application
*/
function Home() {
  const [workspaceDisplay, setWorkspaceDisplay] = React.useState('none');
  const [channelDisplay, setChannelDisplay] = React.useState('none');
  const [directDisplay, setDirectDisplay] = React.useState('none');
  const [messageDisplay, setMessageDisplay] = React.useState('none');
  const [atDisplay, setAtDisplay] = React.useState('none');
  const [searchDisplay, setSearchDisplay] = React.useState('none');
  const [profileDisplay, setProfileDisplay] = React.useState('none');
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
  * @return {Array} - Channels for Page
  */
  function generateChannels() {
    const channels = [];
    for (let i = 0; i < exampleChannels.length; i++) {
      channels[i] = <div id='channel' style={{display: channelDisplay}}>
        <ChevronRightIcon id='hash' fontSize='small'/>
        {exampleChannels[i]}
      </div>;
    }
    return channels;
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
        {generateChannels()}
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
