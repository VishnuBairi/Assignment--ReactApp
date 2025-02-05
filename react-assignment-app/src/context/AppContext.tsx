import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
}

interface AppContextType {
  // Auth state
  isAuthenticated: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  
  // Users state
  users: User[];
  addUser: (user: User) => void;
  
  // Counter state
  counterValue: number;
  backgroundColor: string;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  
  // Users state
  const [users, setUsers] = useState<User[]>([]);
  
  // Counter state
  const [counterValue, setCounterValue] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('rgb(255, 255, 255)');

  const login = (userData: User) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const addUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const increment = () => {
    setCounterValue((prev) => prev + 1);
    const intensity = Math.min(255, (counterValue + 1) * 10);
    setBackgroundColor(`rgb(${255 - intensity}, ${255 - intensity}, 255)`);
  };

  const decrement = () => {
    setCounterValue((prev) => prev - 1);
    const intensity = Math.min(255, Math.abs(counterValue - 1) * 10);
    setBackgroundColor(`rgb(255, ${255 - intensity}, ${255 - intensity})`);
  };

  const reset = () => {
    setCounterValue(0);
    setBackgroundColor('rgb(255, 255, 255)');
  };

  return (
    <AppContext.Provider 
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        users,
        addUser,
        counterValue,
        backgroundColor,
        increment,
        decrement,
        reset
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};