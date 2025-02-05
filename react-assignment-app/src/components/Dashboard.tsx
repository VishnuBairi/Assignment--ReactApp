import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useApp } from '../context/AppContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { counterValue, users } = useApp();

  const chartData = {
    labels: ['Counter', 'Users', 'Active Sessions'],
    datasets: [
      {
        label: 'Application Metrics',
        data: [counterValue, users.length, 1],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Counter Status
            </Typography>
            <Typography variant="h4">{counterValue}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Registered Users
            </Typography>
            <Typography variant="h4">{users.length}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Metrics Overview
            </Typography>
            <Line data={chartData} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard