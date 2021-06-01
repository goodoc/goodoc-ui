import React from 'react';
import TextField from '.';

export default {
  title: 'TextField',
  component: TextField,
}

export const Basic = () => {
  return <TextField placeholder="Basic" />
}

export const Error = () => {
  return <TextField placeholder="Error" error />
}
