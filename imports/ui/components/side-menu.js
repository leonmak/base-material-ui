import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import $ from 'jquery';
import {Link, browserHistory } from 'react-router';
import Avatar from 'material-ui/Avatar';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));
const goTo = url => () => browserHistory.push(url);

export const SideMenu = (props) => {
  console.log(props.hasUser)
  return(

    <Drawer open={props.isOpen} openSecondary={props.isMobile}>

      <img className="app-logo" src="/favicon.png" />
      <span>{"Welcome, " + (props.hasUser && props.hasUser.profile.name.first)}</span>


      {props.hasUser ?
        <div>
        <MenuItem onTouchTap={goTo('/')}>Home</MenuItem>
        <MenuItem onTouchTap={goTo('/documents')}>Flights</MenuItem>
        <MenuItem onTouchTap={handleLogout}>Log Out</MenuItem>
        </div>
      :
        <div>
        <MenuItem onTouchTap={goTo('/login')}>Log In</MenuItem>
        <MenuItem onTouchTap={goTo('/signup')}>Sign Up</MenuItem>
        </div>

      }

    </Drawer>
)
}
