import React, { useState, useRef, useEffect } from 'react';
import theme from '../../theme';
import Icon from '../../icon'
import Icons from '../../icons'

type Props = {
  title: string
  descriptions?: string[]
  tags?: string[]
  onClick?: () => void
  style?: React.CSSProperties
  progileImg?: string
}

export default function ProfileItem({ title, descriptions, tags, onClick, style, progileImg }: Props) {
  let height = 94;

  if ((descriptions && descriptions.length > 0) && (!tags || tags.length === 0)) {
    height = 100;
  } else if ((!descriptions || descriptions.length === 0) && tags && tags.length > 0) {
    height = 100;
  } else if (descriptions && descriptions.length > 0 && tags && tags.length > 0) {
    height = 128;
  }

  const [boxHeight, setBoxHeight] = useState(height);
  const itemRef = useRef(null);
  const defaultStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    paddingLeft: '20px',
    ...style,
  }

  useEffect(() => {
    if (itemRef.current) {
      const refObj = itemRef.current as any;
      if (boxHeight !== refObj?.clientHeight) {
        setBoxHeight(refObj?.clientHeight)
      }
    }

  }, [itemRef])


  return (
    <div ref={itemRef} style={defaultStyle} onClick={onClick}>
      {/* Profile Image Box */}
      <div style={{
        flex: '0 0 26px',
        height: `${boxHeight}px`,
        display: 'flex',
        alignItems: 'center'
      }}>
        {progileImg ? (
          <img src={progileImg} style={{ flex: '0 0 46px', height: '46px', width: '46px', borderRadius: '23px' }} />
        ) : (
          <div style={{ flex: '0 0 46px', height: '46px', width: '46px', borderRadius: '23px', backgroundColor: theme.color.gray['30'] }} />
        )}
      </div>
      {/* Content Box */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: '16px',
        flex: 1,
        paddingTop: '24px',
        paddingBottom: '24px',
        paddingRight: '16px'
      }}>
        {/* Title Content */}
        <div style={{
          flex: '0 0 24px',
          display: 'flex',
          alignItems: 'center',
          fontFamily: theme.typography.fontFamily.basic,
          fontWeight: 'bold',
          fontSize: theme.size.text.normal,
          color: theme.color.gray['100'],
        }}>
          {title}
        </div>
        {/* Description Content */}
        {descriptions && descriptions.length > 0 && (
          <div style={{
            marginTop: '8px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            {descriptions.map((description, index) => (
              <div style={{
                fontFamily: theme.typography.fontFamily.basic,
                fontWeight: 400,
                fontSize: '14px',
                color: theme.color.gray['80'],
                lineHeight: '20px',
                display: 'flex',
                alignItems: 'center'
              }}>
                {description}
                {descriptions.length - 1 > index && <span style={{ color: theme.color.gray['40'], marginLeft: '6px', marginRight: '6px', fontSize: '8px' }}>|</span>}
              </div>
            ))}
          </div>
        )}
        {/* Tags Content */}
        {tags && tags.length > 0 && (
          <div style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
          }}>
            {tags.map((tag) => (
              <div style={{
                padding: '2px 4px 2px 4px',
                backgroundColor: theme.color.gray['20'],
                borderRadius: '4px',
                color: theme.color.gray['60'],
                fontFamily: theme.typography.fontFamily.basic,
                fontWeight: 500,
                fontSize: '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '10px',
                marginTop: '8px'
              }}>
                {tag}
              </div>
            ))}
          </div>
        )}
        
      </div>
      {/* Arrow Box */}
      <div style={{ marginRight: '20px', display: 'flex', height: `${boxHeight}px`, alignItems: 'center', minHeight: '94px' }} >
        <Icon src={Icons.RightArrow} size={14} />
      </div>
    </div>
  )
}