import React from 'react';
import Drawer, { useDrawer } from '.';
import Button from '../button'

export default {
  title: 'Drawer',
  component: Drawer,
}

const SampleDrawer = () => {
  return <div style={{
    height: '150px',
    border: '1px dashed gray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    Drawer Sample
  </div>
}

export const Basic = () => {
  const { open, drawer } = useDrawer({ component: <SampleDrawer />})
  return (
    <>
    <Button size="large" onClick={() => open()} text="Open Drawer"/>
    {drawer}
    </>
  )
}