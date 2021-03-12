import { useContext } from 'react';
import { AppContext } from 'context';

const EmailInput = () => {
  const { email, setEmail, isEmailValid } = useContext(AppContext);

  const handleEmailChange = e => setEmail(e.target.value.trim());

  return (
    <div className='form-element'>
      <input type='text' value={email} onChange={handleEmailChange} required />
      <label className='label'>
        {isEmailValid ? (
          <span className='label-text'>Email</span>
        ) : (
          <span className='error-message'>Email is not valid</span>
        )}
      </label>
    </div>
  );
};

export default EmailInput;
