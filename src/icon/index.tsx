import React from 'react'
import { ClassName } from '../staticString'
import '../index.css'
import { IconProps } from '../icons'

type Props = {
  src: (props: IconProps) => JSX.Element
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  style?: React.CSSProperties
  color?: string
}

export default function Icon({ src, onClick, style, color }: Props) {
  const iconBoxStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    flex: '0 0 24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...style
  }

  const Component = src


  return (
    <div className={onClick ? ClassName.clickable : ''} onClick={onClick} style={iconBoxStyle}>
      <Component color={color} size={24} />
    </div>
  )
}