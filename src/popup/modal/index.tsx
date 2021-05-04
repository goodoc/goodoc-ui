import React, { useState, useEffect } from 'react'
import Dimmer from '../../util/dimmer'
import '../../index.css'

type ModalProps = {
  children: React.ReactNode
  close: () => void
}

export default function Modal({ children, close }: ModalProps) {
  return (
    <Dimmer onClick={close}>
      {children}
    </Dimmer>
  )
}

type Props = {
  component: React.ReactNode
  onClose?: () => void
}

export const useModal = ({ component, onClose }: Props) => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (onClose && !isOpen) {
      onClose()
    }
  }, [isOpen, onClose])

  const closeModal = () => setOpen(false);

  return {
    modal: isOpen? <Modal close={closeModal}>{component}</Modal> : null,
    isOpen,
    open: () => setOpen(true),
    close: closeModal
  }
}
