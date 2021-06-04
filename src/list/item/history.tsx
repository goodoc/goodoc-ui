import React from 'react'
import Icon from '../../icon'
import theme from '../../theme'

type Props = {
  title: string
  badge?: string
  description?: string
  subDescription?: string
  icon?: any
  onClick?: () => void
  additionalItem?: React.ReactNode
  style?: React.CSSProperties
}
export default function History({ style, icon, additionalItem, title, badge, description, subDescription, onClick }: Props) {
  const defaultStyle: React.CSSProperties = {
    width: '100%',
    flex: '0 0 124px',
    display: 'flex',
    paddingLeft: '20px',
    ...style,
  }
  return (
    <div style={defaultStyle} onClick={onClick}>
      {/* 좌측 아이콘 영역 */}
      {icon && (
        <div style={{
          flex: '0 0 44px',
          height: '124px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <Icon src={icon} size={28} />
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', flex: '1', height: '124px' }}>
        {/* 컨텐츠 바디 */}
        <div style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          height: '124px',
          paddingTop: '24px',
        }}>
          {/* 바디 타이틀 영역 */}
          <div style={{
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            color: theme.color.gray['100'],
            fontWeight: 'bold',
            fontSize: `${theme.size.text.normal}px`,
            fontFamily: theme.typography.fontFamily.basic,
          }}>
            {title}
            {badge && (
              <div style={{
                marginLeft: '6px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.color.blue['20'],
                color: theme.color.blue['60'],
                fontFamily: theme.typography.fontFamily.basic,
                fontSize: '12px',
                borderRadius: '4px',
                padding: '2px 4px 2px 4px'
              }}>
                {badge}
              </div>
            )}
          </div>
          {/* 바디 Description 영역역*/}
          <div style={{
            marginTop: '8px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            color: theme.color.gray['80'],
            fontFamily: theme.typography.fontFamily.basic,
            fontSize: '14px'
          }}>
           {description}
          </div>
          {/* 바디 SjbDescription 영역역*/}
          <div style={{
            marginTop: '4px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            color: theme.color.gray['50'],
            fontFamily: theme.typography.fontFamily.basic,
            fontSize: '14px'
          }}>
            {subDescription}
          </div>
        </div>
        {/* 우측 옵셔널 컴포넌트 영역 */}
        {additionalItem && (
          <div style={{ marginRight: '20px', display: 'flex', height: '124px', alignItems: 'center' }} >
            {additionalItem}
          </div>
        )}
      </div>
    </div>
  )
}