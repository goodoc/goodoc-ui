import React from 'react'
import { ClassName } from '../staticString'
import '../index.css'

type Props = {
  src: any
  size: number
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  style?: React.CSSProperties
}

export default function Icon({ src, size, onClick, style }: Props) {
  const iconStyle = {
    width: `${size}px`,
      height: `${size}px`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...style
  }
  return (
    <div className={onClick ? ClassName.clickable : ''} onClick={onClick} style={iconStyle}>
      <img src={src} alt="icon" />
    </div>
  )
}