import React, { useState } from 'react'
import Dimmer from '../dimmer'
import '../index.css'
import theme from '../theme'
import Button from '../button'
import Icon from '../icon'
import Icons from '../icons'

type AlertProps = {
  message: string
  description?: string
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
  width: '100%',
  fontSize: '20px',
  fontWeight: 700,
  color: theme.color.gray['100'],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export default function Alert({ message, onConfirm, onCancel, description }: AlertProps) {
  const handleClickConform = () => {
    onConfirm && onConfirm();
    onCancel && onCancel();
  }

  return (
    <Dimmer>
      <div style={alertContainerStyle}>
        <div style={closeBoxStyle}>
          <Icon onClick={handleClickConform} src={Icons.Close} />
        </div>
        <div style={{
          ...messageStyle,
          marginTop: description ? '40px' : '60px'
        }}>
          {message}
        </div>
        {description && (
          <div style={{
            marginTop: '11px',
            textAlign: 'center',
            width: '195px',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            color: theme.color.gray['60'],
          }}>
            {description}
          </div>
        )}
        <Button onClick={onConfirm} style={{ borderRadius: '4px', width: '280px', height: '47px', position: 'absolute', bottom: '23px' }} text="확인" />
      </div>
    </Dimmer>
  )
}

type Props = {
  message: string
  onConfirm?: () => void
  description?: string
}

export const useAlert = ({ onConfirm, message, description }: Props) => {
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
    alert: isOpen? <Alert description={description} message={message} onCancel={closeAlert} onConfirm={confirm} /> : null,
    open: () => setOpen(true),
  }
}
