import React from 'react';
import Button from '.';

export default {
  title: 'input/button',
  component: Button,
}

export const Basic = () => {
  return <Button text="basic" />
}

export const White = () => {
  return <Button text="white" color="white" />
}