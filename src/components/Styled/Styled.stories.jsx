import React from 'react';
import {Styled} from '.';

export default {
  title: 'Components/Styled',
  component: Styled,
};

export const Default = {
  args: {
    text: "Hello, Storybook!",
    fontSize: 16,
  },
};

export const LargeText = {
  args: {
    text: "Large Font Text",
    fontSize: 24,
  },
};

export const InvalidProp = {
  args: {
    text: 123,
  },
};
