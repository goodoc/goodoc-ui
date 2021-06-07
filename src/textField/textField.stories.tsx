import React from 'react';
import TextField from '.';

export default {
  title: 'TextField',
  component: TextField,
}

export const Basic = () => {
  return <TextField placeholder="Basic" />
}

export const Disable = () => {
  return <TextField placeholder="Disable" disable />
}

export const Clean = () => {
  return <TextField placeholder="Clean" clean />
}

export const Error = () => {
  return <TextField placeholder="Error" error />
}
