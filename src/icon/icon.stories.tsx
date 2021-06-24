import React from 'react';
import { Icons as IconCollection } from '../index';
import Icon from '../icon';
import theme from '../theme'

export default {
  title: 'Icon',
  component: Icon,
}

export const BasicIcon = () => {
  return (
    <Icon src={IconCollection.RightArrow} />
  )
}

export const ColorIcon = () => {
  return (
    <Icon src={IconCollection.Save} color={theme.color.red['60']} />
  )
}

