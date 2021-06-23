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
    <Icon src={IconCollection.RightArrow} size={24} />
  )
}

export const ColorIcon = () => {
  return (
    <Icon src={IconCollection.Save} size={24} color={theme.color.red['60']} />
  )
}

