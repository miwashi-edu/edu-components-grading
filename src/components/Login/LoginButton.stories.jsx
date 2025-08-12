import React from 'react';
import LoginButton from './LoginButton.atom';

export default {
  title: 'Components/Login/LoginButton',
  component: LoginButton,
};

export const Default = {
  args: {
    onClick: () => alert('Login button clicked'),
  },
};

export const NoLoginMethodProvided = {
};
