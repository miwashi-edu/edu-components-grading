import React, { useState } from 'react';
import styles from './Login.module.css';
import UserField from './UserField.atom';
import PasswordField from './PasswordField.atom';
import LoginButton from './LoginButton.atom';

const Login = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!onLogin) {
    return (<div>No onLogin method provided.</div>);
  }

  const handleLogin = () => {
    setError()
    if (username === '' || password === '') {
      setError('Username and password cannot be empty.');
    } else {
      setError('');
    }
    onLogin();
  };

  return (
    <div className={styles.container}>
      <UserField username={username} onChange={setUsername} />
      <PasswordField password={password} onChange={setPassword} />
      <LoginButton onClick={handleLogin} />
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

export default Login;
