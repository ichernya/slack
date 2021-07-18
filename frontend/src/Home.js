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

/**
* Simple component with no state.
*
* @return {object} JSX
*/
function Home() {
  return (
    <div>
      <div id='header'>
        CSE183 Summer 2021
        <ArrowDropDownCircleIcon id='header-arrow'/>
      </div>
      <div id='channel-body'>
        <div id='body-header'>
          <ArrowDropDownCircleIcon id='body-arrow' fontSize='small'/>
          Channels
        </div>
        <div id='channel' style={{display: 'block'}}>
          <ChevronRightIcon id='hash' fontSize='small'/>
          Assignment 1
        </div>
        <div id='channel' style={{display: 'block'}}>
          <ChevronRightIcon id='hash' fontSize='small'/>
          Assignment 2
        </div>
        <div id='channel' style={{display: 'block'}}>
          <AddBoxOutlinedIcon id='hash' fontSize='small'/>
          Add Channel
        </div>
        <div id='body-header'>
          <ArrowDropDownCircleIcon id='body-arrow' fontSize='small'/>
          Direct Messages
        </div>
        <div id='channel' style={{display: 'block'}}>
          <AccountCircleOutlinedIcon id='hash' fontSize='small'/>
          Jimbo McGee
        </div>
        <div id='channel' style={{display: 'block'}}>
          <AccountCircleOutlinedIcon id='hash' fontSize='small'/>
          Dude Man
        </div>
        <div id='channel' style={{display: 'block'}}>
          <AddBoxOutlinedIcon id='hash' fontSize='small'/>
          Add Teammate
        </div>
      </div>
      <BottomNavigation id='navigation'>
        <BottomNavigationAction
          label="" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction
          label="" icon={<ForumOutlinedIcon />} />
        <BottomNavigationAction
          label="" icon={<AlternateEmailIcon />} />
        <BottomNavigationAction
          label="" icon={<SearchIcon />} />
        <BottomNavigationAction
          label="" icon={<PermIdentityIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default Home;
