import { useContext } from 'react';
import { AppContext } from 'context';

import UsernameInput from 'components/UsernameInput';
import EmailInput from 'components/EmailInput';
import PasswordInput from 'components/PasswordInput';
import ConfirmPasswordInput from 'components/ConfirmPasswordInput';

import './Form.css';

const Form = () => {
  const {
    username,
    email,
    password,
    confirmPassword,
    toggleIsUsernameValid,
    toggleIsEmailValid,
    toggleIsPasswordValid,
    toggleIsConfirmPasswordValid,
  } = useContext(AppContext);

  const handleFormSubmit = e => {
    e.preventDefault();

    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
  };

  const validateUsername = () => {
    if (username.length < 3) {
      toggleIsUsernameValid(false);
    } else {
      toggleIsUsernameValid(true);
    }
  };

  const validateEmail = () => {
    if (!isEmailValid(email)) {
      toggleIsEmailValid(false);
    } else {
      toggleIsEmailValid(true);
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      toggleIsPasswordValid(false);
    } else {
      toggleIsPasswordValid(true);
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword !== password || !confirmPassword) {
      toggleIsConfirmPasswordValid(false);
    } else {
      toggleIsConfirmPasswordValid(true);
    }
  };

  const isEmailValid = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <form className='form' noValidate onSubmit={handleFormSubmit}>
      <h2>Sign Up Now!</h2>
      <UsernameInput />
      <EmailInput />
      <PasswordInput />
      <ConfirmPasswordInput />
      <button className='submit-button'>Sign up</button>
    </form>
  );
};

export default Form;
