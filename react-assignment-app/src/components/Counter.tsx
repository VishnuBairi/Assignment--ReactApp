import React from 'react';
import { Button, Box, Typography, Paper } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import { useApp } from '../context/AppContext';

const Counter = () => {
  const { counterValue, backgroundColor, increment, decrement, reset } = useApp();

  const props = useSpring({
    to: { backgroundColor },
    config: { tension: 120, friction: 14 },
  });

  return (
    <animated.div style={{ ...props, minHeight: '100vh', padding: '2rem' }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Counter: {counterValue}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={increment}>
            Increment
          </Button>
          <Button variant="contained" color="secondary" onClick={decrement}>
            Decrement
          </Button>
          <Button variant="outlined" onClick={reset}>
            Reset
          </Button>
        </Box>
      </Paper>
    </animated.div>
  );
};

export default Counter