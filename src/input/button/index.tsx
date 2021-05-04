import React, { CSSProperties } from 'react';
import theme from '../../theme';
import '../../index.css'
import { ClassName } from '../../staticString';

type Props = {
  text: string
  style?: CSSProperties
  size?: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge'
  color?: 'primary' | 'warn' | 'white'
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}



export default function Button({text, onClick, style, size='normal', color='primary'}: Props) {
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
    backgroundColor: theme.color[color],
    color: textColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border,
    ...style
  }

  return (
    <div className={ClassName.clickable} style={defaultStyle} onClick={onClick}>{text}</div>
  )
}