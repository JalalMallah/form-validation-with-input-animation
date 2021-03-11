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
    setUsername,
    isUsernameValid,
    email,
    setEmail,
    isEmailValid,
    password,
    setPassword,
    isPasswordValid,
    confirmPassword,
    setConfirmPassword,
    isConfirmPasswordValid,
    toggleIsUsernameValid,
    toggleIsEmailValid,
    toggleIsPasswordValid,
    toggleIsConfirmPasswordValid,
    toggleIsBannerActive,
  } = useContext(AppContext);

  const handleFormSubmit = e => {
    e.preventDefault();

    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    if (username && email && password && confirmPassword) {
      validateForm();
    }

    resetFormInputValues();
  };

  const validateUsername = () => {
    if (username.length < 3) {
      toggleIsUsernameValid(false);
    } else {
      toggleIsUsernameValid(true);
    }
  };

  const validateEmail = () => {
    if (!isProvidedEmailValid(email)) {
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

  const isProvidedEmailValid = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      showSuccessBanner();
    }
  };

  const showSuccessBanner = () => {
    toggleIsBannerActive(true);

    setTimeout(() => {
      toggleIsBannerActive(false);
    }, 3000);
  };

  const resetFormInputValues = () => {
    setTimeout(() => {
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      toggleIsUsernameValid(true);
      toggleIsEmailValid(true);
      toggleIsPasswordValid(true);
      toggleIsConfirmPasswordValid(true);
    }, 3000);
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
