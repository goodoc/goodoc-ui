import React, { useState, useEffect } from 'react'
import Dimmer from '../dimmer'
import '../index.css'

type ModalProps = {
  children: React.ReactNode
  close: () => void
  isOpen: boolean
}

export default function Drawer({ children, close, isOpen }: ModalProps) {
  const width = typeof window === 'undefined' ? '100%' : window.innerWidth
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen])
  return (
    <>
      <div
        style={{
          width: width,
          zIndex: isOpen ? 9999999999999 : -1,
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          backgroundColor: '#ffffff',
        }}
        className={isShow ? 'drawer isOpen' : 'drawer'}>
        <div
          style={{
            margin: '40px 20px 12px 20px'
          }}
        >
          {children}
        </div>
      </div>
      {isOpen && <Dimmer onClick={close}>{null}</Dimmer>}
    </>
  )
}

type Props = {
  component: React.ReactNode
  onClose?: () => void
}

export const useDrawer = ({ component, onClose }: Props) => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (onClose && !isOpen) {
      onClose()
    }
  }, [isOpen, onClose])

  const closeModal = () => setOpen(false);

  return {
    drawer: <Drawer isOpen={isOpen} close={closeModal}>{component}</Drawer>,
    isOpen,
    open: () => setOpen(true),
    close: closeModal
  }
}
