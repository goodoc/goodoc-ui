import React from 'react';
import List from './container';
import HistoryItem from './item/history';
import ProfileItem from './item/profile';
import HospitalItem from './item/hospital';
import Icon from '../icon';
import SampleIcon from '../icons/listItemIconSample.svg';
import Icons from '../icons';
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
        additionalItem={<Icon src={Icons.RightArrow} />}
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

      <ProfileItem
        title="박준균 대표원장"
        descriptions={["영상의학과 전문의"]}
        tags={['영상의학과', '초음파 검진']}
      />
      <ProfileItem
        title="박준균 대표원장"
      />
      <ProfileItem
        title="박준균 대표원장"
        descriptions={["영상의학과 전문의"]}
      />
      <ProfileItem
        title="박준균 대표원장"
        tags={['영상의학과', '초음파 검진']}
      />
      <ProfileItem
        title="박준균 대표원장"
        descriptions={["영상의학과 전문의"]}
        tags={['영상의학과', '초음파 검진', '영상의학과', '초음파 검진', '영상의학과', '초음파 검진']}
      />
      <ProfileItem
        title="박준균 대표원장"
        descriptions={["영상의학과 전문의", "소화기내시경 전문의", "내과 전문의"]}
        tags={['영상의학과', '초음파 검진', '영상의학과', '초음파 검진', '영상의학과', '초음파 검진']}
      />
      <HospitalItem
        title="강남연세소아과의원"
        operationInfo={{
          status: '진료중',
          openTime: '10:00',
          closeTime: '19:00'
        }}
        distance="300m"
        badges={['🚀로켓접수', '예약']}
        departments={['소아청소년과', '외과', '내과']}
      />
      <HospitalItem
        title="강남연세소아과의원"
        operationInfo={{
          status: '진료준비',
          openTime: '10:00',
          closeTime: '19:00'
        }}
        distance="300m"
        departments={['소아청소년과', '외과', '내과']}
      />
      <HospitalItem
        title="강남연세소아과의원"
        operationInfo={{
          status: '진료종료',
          openTime: '10:00',
          closeTime: '19:00'
        }}
        distance="300m"
        departments={['소아청소년과', '외과', '내과']}
      />
      <HospitalItem
        title="강남연세소아과의원"
        operationInfo={{
          status: '진료중',
          openTime: '10:00',
          closeTime: '19:00'
        }}
        distance="300m"
        departments={['소아청소년과', '외과', '내과']}
        tags={['전문의', '주차가능', '여의사']}
      />
    </List>
  )
}
