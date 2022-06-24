import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Drawer, Avatar, List, ListItem, Typography } from '@mui/material';
import { ListItemText, ListItemAvatar } from '@mui/material';
import { Dashboard } from '@mui/icons-material';

const SideBar = ({ ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer {...props}>
      <List>
        <ListItem sx={{ mb: 12 }}>
          <Typography variant='h5'>
            ReactFirebase
          </Typography>
        </ListItem>
        <ListItem
          sx={{ textTransform: 'uppercase' }}
          selected={location.pathname === '/'}
          onClick={() => navigate('/')}
          button
        >
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <Dashboard />
            </Avatar>
          </ListItemAvatar>
          <ListItemText secondary='Board' />
        </ListItem>
      </List>
    </Drawer>
  )
};

export default SideBar;
