import React from 'react';
import Login from './Login.molecule';

export default {
  title: 'Components/Login',
  component: Login,
};

export const Default = {
  args: {
    onLogin: () => console.log('Login button clicked'),
  },
};

export const NoLoginMethodProvided = {
};
