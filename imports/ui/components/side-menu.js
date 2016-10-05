import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import $ from 'jquery';

export const SideMenu = (props) => (
    <Drawer open={props.isOpen}>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
)
