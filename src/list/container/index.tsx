import React from 'react'

type Props = {
  style?: React.CSSProperties
  children?: React.ReactNode
}

export default function ListContainer({ style, children }: Props) {
  const defaultStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    ...style
  }
  return (
    <div style={defaultStyle}>
      {children}
    </div>
  )
}