import React from 'react';
import { Icons as IconCollection } from '../index';
import Icon from '../icon';

type Props = {
  children: React.ReactNode
}

const IconsBox = ({ children }: Props) => (
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  }}>
    {children}
  </div>
)

const IconBox = ({ children }: Props) => (
  <div style={{
    flex: '0 0 110px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '10px',
    marginLeft: '10px',
    marginBottom: '20px'
  }}>
    {children}
  </div>
)

const IconName = ({ children }: Props) => (
  <div style={{
    fontSize: '14px',
    fontWeight: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '24px',
    height: '20px',
    marginTop: '4px',
  }}>
    {children}
  </div>
)

export default {
  title: 'Icons',
  component: IconsBox,
}

export const Icons = () => {
  return (
    <IconsBox>
      {/* Use Icon Component & svg on icons */}
      <IconBox>
        <Icon src={IconCollection.LeftArrowLight} size={24} />
        <IconName >
          LeftArrowLight
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.RightArrowLight} size={24} />
        <IconName >
          RightArrowLight
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.DownArrowLight} size={24} />
        <IconName >
          DownArrowLight
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.UpArrowLight} size={24} />
        <IconName >
          UpArrowLight
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.CloseLight} size={24} />
        <IconName >
          CloseLight
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.LeftArrow} size={24} />
        <IconName >
          LeftArrow
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.RightArrow} size={24} />
        <IconName >
          RightArrow
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.DownArrow} size={24} />
        <IconName >
          DownArrow
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.UpArrow} size={24} />
        <IconName >
          UpArrow
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Close} size={24} />
        <IconName >
          Close
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Search} size={24} />
        <IconName >
          Search
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Share} size={24} />
        <IconName >
          Share
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.CircleClose} size={24} />
        <IconName >
          CircleClose
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Refresh} size={24} />
        <IconName >
          Refresh
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Setting} size={24} />
        <IconName >
          Setting
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Notice} size={24} />
        <IconName >
          Notice
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.My} size={24} />
        <IconName >
          My
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.ListActivity} size={24} />
        <IconName >
        ListActivity
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Cart} size={24} />
        <IconName >
          Cart
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Save} size={24} />
        <IconName >
          Save
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Saved} size={24} />
        <IconName >
          Saved
        </IconName>
      </IconBox>
    </IconsBox>
  )
}
