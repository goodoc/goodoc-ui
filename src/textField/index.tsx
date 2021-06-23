import React, { CSSProperties, useState } from 'react';
import theme from '../theme';
import Icons from '../icons';
import Icon from '../icon';
import { ClassName } from '../staticString';
import '../index.css'

type Props = {
  style?: CSSProperties
  error?: boolean
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  clean?: boolean
  onClickClean?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  disable?: boolean
}

export default function TextField({ style, error, placeholder, onChange, value, clean, onClickClean, disable }: Props) {
  const [isFocus, setFocus] = useState(false);
  let border = '1px solid #E5E7EC';

  if (isFocus) {
    border = '1px solid #111723';
  }
  if (error) {
    border = '1px solid #FF4E4E';
  }
  const boxStyle: React.CSSProperties = {
    width: '320px',
    height: '56px',
    borderRadius: '8px',
    display: 'flex',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    border,
    ...style
  }

  const inputStyle: React.CSSProperties = {
    color: theme.color.gray['100'],
    fontWeight: 400,
    marginLeft: '16px',
    height: '18px',
    width: 'calc(100% - 32px)',
    border: 'none',
    fontSize: theme.size.text.normal
  }

  if (disable) {
    boxStyle.backgroundColor = theme.color.gray['10'],
    inputStyle.backgroundColor = theme.color.gray['10']
    inputStyle.color = theme.color.gray['50']
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disable && onChange) {
      onChange(e)
    }
  }

  const handleClearClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClickClean) {
      onClickClean(e);
    }
  }

  return (
    <div onBlur={() => { setFocus(false) }} onFocus={() => { setFocus(true) }} style={boxStyle} >
      <input onChange={handleChange} placeholder={placeholder} value={value} style={inputStyle} disabled={disable} />
      {clean && (
        <Icon onClick={handleClearClick} style={{ marginRight: '20px' }} size={8} src={Icons.CircleClose} />  
      )}
    </div>
  )
}