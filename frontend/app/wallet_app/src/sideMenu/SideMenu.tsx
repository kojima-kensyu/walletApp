import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import { TabList } from "./TabList";


export const SideMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  }

  return(
    <div>
      <IconButton onClick={toggleDrawer(true)} size="large" sx={{ mr: 1 }} >
        <MenuIcon />
      </IconButton>
      <div className="drawer">
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <TabList 
          open={open}
          setOpen={setOpen}
          />
        </Drawer>
      </div>
    </div>
  )
}