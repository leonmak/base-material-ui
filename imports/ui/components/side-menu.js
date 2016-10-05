import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import $ from 'jquery';

const isMobile = () => $(window).width() < 960

export const SideMenu = (props) => (
    <Drawer open={!isMobile()}>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
)
