import React from 'react';

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const contextObject = {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  };

  return <AppContext.Provider value={contextObject}>{children}</AppContext.Provider>;
};

export default AppProvider;
