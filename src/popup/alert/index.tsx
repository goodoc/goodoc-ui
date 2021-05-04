import React, { useState } from 'react'
import Dimmer from '../../util/dimmer'
import '../../index.css'
import theme from '../../theme'
import Button from '../../input/button'
import Icon from '../../util/icon'
import close from '../../icon/close.svg'

type AlertProps = {
  message: string
  onConfirm?: () => void
  onCancel: () => void
}

const alertContainerStyle: React.CSSProperties = {
  width: '320px',
  height: '200px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative'
}

const closeBoxStyle: React.CSSProperties = {
  position: 'absolute',
  top: '18px',
  right: '18px',
  width: '24px',
  height: '24px'
}

const messageStyle: React.CSSProperties = {
  marginTop: '60px',
  width: '100%',
  fontSize: `${theme.size.text.normal}px`,
  color: theme.color.gray['100'],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export default function Alert({ message, onConfirm, onCancel }: AlertProps) {
  const handleClickConform = () => {
    onConfirm && onConfirm();
    onCancel && onCancel();
  }
  return (
    <Dimmer>
      <div style={alertContainerStyle}>
        <div style={closeBoxStyle}>
          <Icon size={24} onClick={handleClickConform} src={close} />
        </div>
        <div style={messageStyle}>
          {message}
        </div>
        <Button onClick={onConfirm} style={{ borderRadius: '4px', width: '280px', height: '47px', position: 'absolute', bottom: '23px' }} text="확인" />
      </div>
    </Dimmer>
  )
}

type Props = {
  message: string
  onConfirm?: () => void
}

export const useAlert = ({ onConfirm, message }: Props) => {
  const [isOpen, setOpen] = useState(false)


  const closeAlert = () => {
    setOpen(false)
  }

  const confirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    setOpen(false)
  }

  return {
    alert: isOpen? <Alert message={message} onCancel={closeAlert} onConfirm={confirm} /> : null,
    open: () => setOpen(true),
  }
}
