import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Navigation from './components/Navigation';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import Dashboard from './components/Dashboard';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import { AppProvider } from './context/AppContext';
import RichTextEditor from './components/RichTextEditor';

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navigation />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/counter"
              element={
                <PrivateRoute>
                  <Counter />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <UserForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/richtexteditor"
              element={
                <PrivateRoute>
                  <RichTextEditor value={''} onChange={function (value: string): void {
                    throw new Error('Function not implemented.');
                  } }/>
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App