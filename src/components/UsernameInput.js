import { useContext } from 'react';
import { AppContext } from 'context';

const UsernameInput = () => {
  const { username, setUsername, isUsernameValid } = useContext(AppContext);

  const handleUsernameChange = e => setUsername(e.target.value.trim());

  return (
    <div className='form-element'>
      <input type='text' value={username} onChange={handleUsernameChange} required />
      <label className='label'>
        {isUsernameValid ? (
          <span className='label-text'>Username</span>
        ) : (
          <span className='error-message'>Username must be at least 3 characters</span>
        )}
      </label>
    </div>
  );
};

export default UsernameInput;
