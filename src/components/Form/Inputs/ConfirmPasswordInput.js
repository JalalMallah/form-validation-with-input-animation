import { useContext } from 'react';
import { AppContext } from 'context';

const ConfirmPasswordInput = () => {
  const { confirmPassword, setConfirmPassword, isConfirmPasswordValid } = useContext(AppContext);

  const handleConfirmPasswordChange = e => setConfirmPassword(e.target.value.trim());

  return (
    <div className='form-element'>
      <input
        type='password'
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        required
      />
      <label className='label'>
        {isConfirmPasswordValid ? (
          <span className='label-text'>Confirm password</span>
        ) : (
          <span className='error-message'>Passwords must match</span>
        )}
      </label>
    </div>
  );
};

export default ConfirmPasswordInput;
