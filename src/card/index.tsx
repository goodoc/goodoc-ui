import React from 'react';
import '../index.css'

type Props = {
  style?: React.CSSProperties
}

export default function Card({ style }: Props) {
  return (
    <div style={style}>
      cards
    </div>
  )
}