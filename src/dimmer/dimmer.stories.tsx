import React from 'react';
import Dimmer from '.';

export default {
  title: 'Dimmer',
  component: Dimmer,
}

const CenterBox = () => {
  return <div style={{
    width: '300px',
    height: '150px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    Center Box on Dimmer
  </div>
}

const ExtenalDinner = () => {
  return <p>Hello goodoc!</p>
}

export const Basic = () => {
  return (
    <>
    <ExtenalDinner />
    <Dimmer>
      <CenterBox />
    </Dimmer>
    </>
  )
}