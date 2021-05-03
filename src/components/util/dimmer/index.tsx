import React from 'react'
import '../../../index.css'

type Props = {
  children: React.ReactNode
  onClick?: () => void
  backgroundColor?: string
}


export default function Dimmer({ children, onClick, backgroundColor = 'rgba(0, 0, 0, 0.7)' }: Props) {
  const { innerWidth, innerHeight } = window

  const backgroundStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    width: innerWidth,
    height: innerHeight,
    position: 'fixed',
    top: '0px',
    left: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999998
  }

  return (
    <div onClick={onClick} style={backgroundStyle}>
      <div style={{ zIndex: 99999999 }} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}