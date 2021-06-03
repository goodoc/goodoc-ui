import React, { CSSProperties, useState } from 'react';
import theme from '../theme';
import '../index.css'

type Props = {
  style?: CSSProperties
  error?: boolean
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export default function TextField({ style, error, placeholder, onChange, value }: Props) {
  const [isFocus, setFocus] = useState(false);
  let border = '1px solid #E5E7EC';

  if (isFocus) {
    border = '1px solid #111723';
  }
  if (error) {
    border = '1px solid #FF4E4E';
  }
  const boxStyle = {
    width: '320px',
    height: '56px',
    borderRadius: '8px',
    display: 'flex',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    border,
    ...style
  }

  const inputStyle = {
    color: theme.color.gray['100'],
    fontWeight: 400,
    marginLeft: '16px',
    height: '18px',
    width: 'calc(100% - 32px)',
    border: 'none',
    fontSize: theme.size.text.normal
  }

  return (
    <div onBlur={() => { setFocus(false) }} onFocus={() => { setFocus(true) }} style={boxStyle} >
      <input onChange={onChange} placeholder={placeholder} value={value} style={inputStyle} />
    </div>
  )
}