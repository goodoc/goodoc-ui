import React from 'react';
import theme from '../../theme'
import { Department } from '../../GoodocTypes'

type OperationInfo = {
  status: '진료중' | '진료준비' | '진료종료'
  openTime: string // HH:mm
  closeTime: string // HH:mm
}

type Badge = '🚀로켓접수' | '예약'

type Props = {
  title: string
  operationInfo?: OperationInfo 
  distance?: string
  departments?: Department[]
  badges?: Badge[]
  tags?: string[]
  style?: React.CSSProperties
}


const BadgeStyle = {
  '🚀로켓접수': {
    backgroundColor: theme.color.blue['20'],
    color: theme.color.blue['60']
  },
  '예약': {
    backgroundColor: '#E6FEFA',
    color: '#40C3AD',
  }
}

const weekMap = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
}

export default function Hostpital({ title, operationInfo, distance, departments, badges, tags, style }: Props) {
  const defaultStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    paddingLeft: '20px',
    paddingTop: '24px',
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    ...style,
  }

  const week = new Date().getDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6;
  const weekKrName = weekMap[week];
  let operationStatusStyle = {
    textColor: '',
    statusSpotColor: ''
  }
  if (operationInfo?.status === '진료중') {
    operationStatusStyle = {
      textColor: theme.color.gray['100'],
      statusSpotColor: theme.color.blue['60']
    }
  } else if (operationInfo?.status === '진료준비') {
    operationStatusStyle = {
      textColor: theme.color.gray['70'],
      statusSpotColor: theme.color.blue['40']
    }
  } else {
    operationStatusStyle = {
      textColor: theme.color.gray['60'],
      statusSpotColor: ''
    }
  }
  return (
    <div style={defaultStyle} >
      {badges && badges.length > 0 && (
        <div style={{
          marginBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          flex: '0 0 20px',
          width: '100%',
        }}>
          {badges.map((badge) => (
            <div style={{
              marginRight: '6px',
              height: '20px',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '12px',
              fontWeight: 500,
              paddingLeft: '4px',
              paddingRight: '4px',
              ...BadgeStyle[badge]
            }}>
              {badge}
            </div>
          ))}
        </div>
      )}
      <div style={{
        width: '100%',
        height: '26px',
        fontFamily: theme.typography.fontFamily.basic,
        fontWeight: 'bold',
        fontSize: '18px',
        color: theme.color.gray['100'],
        display: 'flex',
        alignItems: 'center'
      }}>
        {title}
      </div>
      {operationInfo && (
        <div style={{
          marginTop: '8px',
          display: 'flex',
          alignItems: 'center',
          flex: '0 0 20px',
        }}>
          {operationStatusStyle.statusSpotColor !== '' && (
            <div style={{
              flex: '0 0 8px',
              height: '8px',
              borderRadius: '4px',
              marginRight: '6px',
              backgroundColor: operationStatusStyle.statusSpotColor
            }} />
          )}
          <div style={{
            color: operationStatusStyle.textColor,
            display: 'flex',
            alignItems: 'center',
            height: '20px',
            fontFamily: theme.typography.fontFamily.basic,
            fontWeight: 'bold',
            fontSize: '14px',
          }}>
            {operationInfo.status}
          </div>
          <div style={{
            color: theme.color.gray['80'],
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '6px',
            fontFamily: theme.typography.fontFamily.basic,
            fontSize: '14px',
          }}>
            {weekKrName}
          </div>
          <div style={{
            color: theme.color.gray['80'],
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '6px',
            fontFamily: theme.typography.fontFamily.basic,
            fontSize: '14px',
          }}>
            {`${operationInfo.openTime} ~ ${operationInfo.closeTime}`}
          </div>
        </div>
      )}
      {(distance || (departments && departments.length > 0)) && (
        <div style={{
          display: 'flex',
          height: '20px',
          alignItems: 'center',
          marginTop: '4px',
          fontFamily: theme.typography.fontFamily.basic,
          color: theme.color.gray['50'],
          fontSize: '14px'
        }}>
          {distance && (
            <div>
              {distance}
            </div>
          )}
          {distance && (departments && departments.length > 0) && (
            <div style={{ color: theme.color.gray['40'], height: '20px', display: 'flex', alignItems: 'center', fontSize: '10px', marginLeft: '6px', marginRight: '6px' }}>|</div>
          )}
          {departments && departments.length > 0 && (
            <div>{departments.join('·')}</div>
          )}
        </div>
      )}
      {(tags && tags.length > 0) && (
        <div style={{
          marginTop: '12px',
          display: 'flex',
          height: '20px'
        }}>
          {tags.map((tag) => (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.color.gray['20'],
              color: theme.color.gray['60'],
              paddingLeft: '4px',
              paddingRight: '4px',
              fontSize: '12px',
              fontFamily: theme.typography.fontFamily.basic,
              fontWeight: 500,
              marginRight: '6px',
              height: '20px',
              borderRadius: '4px',
            }}>
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}