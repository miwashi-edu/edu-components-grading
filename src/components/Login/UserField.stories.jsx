import React, { useState } from 'react';
import UserField from './UserField.atom';
export default {
  title: 'Components/Login/UserField',
  component: UserField,
};
export const Default = () => {
  const [user, setUser] = useState('');
  const handleChange = (newUser) => {
    console.log('setUser called with:', newUser);
    setUser(newUser);
  };
  return (
      <UserField
          user={user}
          onChange={handleChange}
      />
  );
};
export const NoOnChangeProvided = {};
