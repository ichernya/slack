import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
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
      <BottomNavigation id='navigation'>
        <BottomNavigationAction
          label="Recents" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction
          label="Favorites" icon={<ForumOutlinedIcon />} />
        <BottomNavigationAction
          label="Nearby" icon={<AlternateEmailIcon />} />
        <BottomNavigationAction
          label="Recents" icon={<SearchIcon />} />
        <BottomNavigationAction
          label="Recents" icon={<PermIdentityIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default Home;
