import { useContext } from 'react';
import { AppContext } from 'context';

const PasswordInput = () => {
  const { password, setPassword, isPasswordValid } = useContext(AppContext);

  const handlePasswordChange = e => setPassword(e.target.value.trim());

  return (
    <div className='form-element'>
      <input type='password' value={password} onChange={handlePasswordChange} required />
      <label className='label'>
        {isPasswordValid ? (
          <span className='label-text'>Password</span>
        ) : (
          <span className='error-message'>Password must be at least 8 characters</span>
        )}
      </label>
    </div>
  );
};

export default PasswordInput;
