import React from 'react';
import '../../index.css'

type Props = {
  style?: React.CSSProperties
}

export default function Chip({ style }: Props) {
  return (
    <div style={{...style}}>
      <div>
        chip
      </div>
    </div>
  )
}