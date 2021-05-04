import React from 'react';
import Modal, { useModal } from '.';
import Button from '../button'

export default {
  title: 'Modal',
  component: Modal,
}

const SampleModal = () => {
  return <div style={{
    width: '300px',
    height: '150px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    Sample Modal
  </div>
}

export const Basic = () => {
  const { open, modal } = useModal({ component: <SampleModal />})
  return (
    <>
    <Button size="large" onClick={() => open()} text="Open modal"/>
    {modal}
    </>
  )
}