import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import EditNoteIcon from '@mui/icons-material/Settings';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Link as RouterLink } from "react-router-dom";

const links = [
    {to: "/", text: "input"},
    {to: "/calendar", text: "calendar"},
    {to: "/chart", text: "chart"},
    {to: "/setting", text: "settings"}
]

type toggleDrawer = {
open: boolean;
setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TabList = ({open, setOpen}: toggleDrawer) => {

    const icons = (index: number) => {
        switch (index) {
          case 0:
            return <EditNoteIcon />
          case 1:
            return <DateRangeIcon />
          case 2:
            return <DonutSmallIcon />
          case 3:
            return <SettingsIcon />
          default:
            return null;
        }
      };
      
    return (
        <>
            <Box sx={{width: 160}} role="presentation" onClick={() => setOpen(false)}>
                <List>
                {links.map((link, index) => (
                    <ListItem key={index} component={RouterLink} to={link.to} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                        { icons(index) }
                        </ListItemIcon>
                        <ListItemText primary={link.text}  sx={{color: "text.secondary"}}/>
                    </ListItemButton>
                    </ListItem>
                ))}
                </List>
            </Box>
        </>
    )
}