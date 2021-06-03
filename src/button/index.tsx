import React, { CSSProperties } from 'react';
import theme from '../theme';
import '../index.css'
import { ClassName } from '../staticString';

type Props = {
  text: string
  style?: CSSProperties
  size?: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge'
  color?: 'primary' | 'warn' | 'white'
  inactive?: boolean
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}



export default function Button({text, onClick, style, size='normal', color='primary', inactive}: Props) {
  const width = theme.size.button[size];
  let height = width / 3;

  if (height < 32) {
    height = 32
  }

  const textColor = color === 'white' ? theme.color.gray['100'] : theme.color.white
  const border = color === 'white' ? `1px solid ${theme.color.gray['50']}` : ''
  const defaultStyle = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: '8px',
    backgroundColor: inactive? theme.color.gray['20'] : theme.color[color],
    color: inactive? theme.color.gray['50'] : textColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border,
    ...style
  }

  return (
    <div className={inactive ? '' : ClassName.clickable} style={defaultStyle} onClick={onClick}>{text}</div>
  )
}