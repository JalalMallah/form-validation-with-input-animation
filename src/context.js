import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [isUsernameValid, toggleIsUsernameValid] = useState(true);
  const [email, setEmail] = useState('');
  const [isEmailValid, toggleIsEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [isPasswordValid, toggleIsPasswordValid] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordValid, toggleIsConfirmPasswordValid] = useState(true);

  const contextObject = {
    username,
    setUsername,
    isUsernameValid,
    toggleIsUsernameValid,
    email,
    setEmail,
    isEmailValid,
    toggleIsEmailValid,
    password,
    setPassword,
    isPasswordValid,
    toggleIsPasswordValid,
    confirmPassword,
    setConfirmPassword,
    isConfirmPasswordValid,
    toggleIsConfirmPasswordValid,
  };

  return <AppContext.Provider value={contextObject}>{children}</AppContext.Provider>;
};

export default AppProvider;
