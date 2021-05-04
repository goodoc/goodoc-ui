import React from 'react';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
}

export const Basic = () => {
  return <Button text="basic" />
}

export const White = () => {
  return <Button text="white" color="white" />
}