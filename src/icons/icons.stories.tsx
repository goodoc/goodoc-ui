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
        <Icon src={IconCollection.LeftArrowLight} />
        <IconName >
          LeftArrowLight
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.RightArrowLight} />
        <IconName >
          RightArrowLight
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.DownArrowLight} />
        <IconName >
          DownArrowLight
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.UpArrowLight} />
        <IconName >
          UpArrowLight
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.CloseLight} />
        <IconName >
          CloseLight
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.LeftArrow} />
        <IconName >
          LeftArrow
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.RightArrow} />
        <IconName >
          RightArrow
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.DownArrow} />
        <IconName >
          DownArrow
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.UpArrow} />
        <IconName >
          UpArrow
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Close} />
        <IconName >
          Close
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Search} />
        <IconName >
          Search
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Share} />
        <IconName >
          Share
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.CircleClose} />
        <IconName >
          CircleClose
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Refresh} />
        <IconName >
          Refresh
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Setting} />
        <IconName >
          Setting
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Notice} />
        <IconName >
          Notice
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.My} />
        <IconName >
          My
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.ListActivity} />
        <IconName >
        ListActivity
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Cart} />
        <IconName >
          Cart
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Save} />
        <IconName >
          Save
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Saved} />
        <IconName >
          Saved
        </IconName>
      </IconBox>
    </IconsBox>
  )
}
