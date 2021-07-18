import React from 'react';
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
import AccountCircleOutlinedIcon from
  '@material-ui/icons/AccountCircleOutlined';
import './Home.css';

const exampleWorkspaces = ['CSE183 Summer 2020', 'CSE183 Summer 2019'];
const exampleChannels = ['Assignment 1', 'Assignment 2'];
const exampleDMs = ['Jimbo McGee', 'Dude Man'];
const navigationIcons = [<HomeOutlinedIcon />, <ForumOutlinedIcon />,
  <AlternateEmailIcon />, <SearchIcon />, <PermIdentityIcon />];

/**
* @return {object} - Home Page for Application
*/
function Home() {
  const [workspaceDisplay, setWorkspaceDisplay] = React.useState('none');
  const [channelDisplay, setChannelDisplay] = React.useState('none');
  const [directDisplay, setDirectDisplay] = React.useState('none');
  /**
  * @return {object} - Channels for Page
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
  * @return {object} - Channels for Page
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
  * @return {object} - Direct Messages for Page
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
  * @return {object} - Navigation Icons for Page
  */
  function generateNavIcons() {
    const icons = [];
    for (let i = 0; i < navigationIcons.length; i++) {
      icons[i] = <BottomNavigationAction icon={navigationIcons[i]} />;
    }
    return icons;
  }
  return (
    <div>
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
        {generateNavIcons()}
      </BottomNavigation>
    </div>
  );
}

export default Home;
