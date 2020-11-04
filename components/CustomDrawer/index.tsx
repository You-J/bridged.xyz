import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { CustomDrawerTypes } from '../../common/types';

const CustomDrawer: React.FC<CustomDrawerTypes> = ({
  anchor,
  lists,
  open,
  toggle,
  className,
}) => {
  const list = () => {
    <div onClick={toggle}>
      <List>
        {lists.map((item) => (
          <ListItem button key={item.href}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>;
  };
  return (
    <>
      <SwipeableDrawer
        anchor={anchor}
        open={open}
        onClose={toggle}
        onOpen={toggle}
      >
        {list}
      </SwipeableDrawer>
    </>
  );
};

export default CustomDrawer;
