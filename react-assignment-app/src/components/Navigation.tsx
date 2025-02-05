import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useApp } from '../context/AppContext';

const Navigation = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useApp();

  return (
    <AppBar position="static" sx={{ marginBottom: 4 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          {isAuthenticated && (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/dashboard"
                variant={location.pathname === '/dashboard' ? 'outlined' : 'text'}
              >
                Dashboard
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/counter"
                variant={location.pathname === '/counter' ? 'outlined' : 'text'}
              >
                Counter
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/profile"
                variant={location.pathname === '/profile' ? 'outlined' : 'text'}
              >
                Profile
              </Button>
            </>
          )}
        </Box>
        {isAuthenticated ? (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button
            color="inherit"
            component={Link}
            to="/login"
            variant={location.pathname === '/login' ? 'outlined' : 'text'}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation