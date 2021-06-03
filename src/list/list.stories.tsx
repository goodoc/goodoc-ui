import React from 'react';
import List from './container';
import HistoryItem from './item/history';
import Icon from '../icon';
import SampleIcon from '../icons/listItemIconSample.svg';
import NavigatableIcon from '../icons/navigatable.svg';
import Button from '../button'

export default {
  title: 'List',
  component: List,
}

export const HistoryList = () => {
  return (
    <List style={{
      width: '340px',
    }}>
      <HistoryItem
        title="디프테리아 파상풍 백일해"
        badge="필수"
        description="접종을 완료했어요."
        subDescription="2021.04.06"
        icon={SampleIcon}
        additionalItem={<Icon src={NavigatableIcon} size={14} />}
      />

      <HistoryItem
        title="디프테리아 파상풍 백일해"
        badge="필수"
        description="접종을 완료했어요."
        subDescription="2021.04.06"
        icon={SampleIcon}
      />

      <HistoryItem
        style={{
          boxShadow: '0 2px 8px 1px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
        }}
        title="박스 커스텀 예시"
        description="박스를 커스텀할 수 있어요."
        badge="굿닥"
      />

      <HistoryItem
        title="진료완료"
        description="서울자이청소년 의원"
        subDescription="유지은 | 2020.03.04"
        additionalItem={<Button text="리뷰작성" inactive style={{ width: '76px', height: '32px', fontSize: '14px' }} />}
      />    
    </List>
  )
}
