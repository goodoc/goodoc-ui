import React from 'react';
import Alert, { useAlert } from '.';
import Button from '../button'

export default {
  title: 'Alert',
  component: Alert,
}

export const Basic = () => {
  const { open, alert } = useAlert({ message: 'Are you sure?'})
  return (
    <>
    <Button size="large" onClick={() => open()} text="Open alert"/>
    {alert}
    </>
  )
}

export const Description = () => {
  const { open, alert } = useAlert({ message: '할인 대상자가 아닙니다.', description: '해당 상품은 코로나 백신 1차 이상 접종자를 위한 혜택입니다.'})
  return (
    <>
    <Button size="large" onClick={() => open()} text="Open alert"/>
    {alert}
    </>
  )
}