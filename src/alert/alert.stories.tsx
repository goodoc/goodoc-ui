import React from 'react';
import Alert, { useAlert } from '.';
import Button from '../button'

export default {
  title: 'Alert',
  component: Alert,
}

export const Basic = () => {
  const { open, alert } = useAlert({ message: 'Are you sure?'})
  return (
    <>
    <Button size="large" onClick={() => open()} text="Open alert"/>
    {alert}
    </>
  )
}