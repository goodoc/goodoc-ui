import React, { useState, useEffect, useRef } from 'react'
import Dimmer from '../dimmer'
import '../index.css'

type ModalProps = {
  children: React.ReactNode
  close: () => void
  isOpen: boolean
}

export default function Drawer({ children, close, isOpen }: ModalProps) {
  return (
    <>
      {isOpen && <Dimmer onClick={close}>{null}</Dimmer>}
      <div style={{
        width: window.innerWidth,
        zIndex: isOpen ? 9999999999999 : -1,
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        backgroundColor: '#ffffff',
      }} className={isOpen ? 'drawer isOpen' : 'drawer'}>
        <div
          style={{
            margin: '40px 20px 12px 20px'
          }}
        >
          {children}
        </div>
      </div>
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
