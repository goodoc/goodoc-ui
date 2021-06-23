import React from 'react'
import { ClassName } from '../staticString'
import '../index.css'
import { IconProps } from '../icons'

type Props = {
  src: (props: IconProps) => JSX.Element
  size: number
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  style?: React.CSSProperties
  color?: string
}

export default function Icon({ src, size, onClick, style, color }: Props) {
  const iconBoxStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    flex: `0 0 ${size}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...style
  }

  const Component = src


  return (
    <div className={onClick ? ClassName.clickable : ''} onClick={onClick} style={iconBoxStyle}>
      <Component color={color} size={size} />
    </div>
  )
}