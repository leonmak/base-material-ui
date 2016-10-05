import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import $ from 'jquery';
import {Link, browserHistory } from 'react-router';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));
const goTo = url => () => browserHistory.push(url);

export const SideMenu = (props) => (
    <Drawer open={props.isOpen} openSecondary={props.isMobile}>
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
