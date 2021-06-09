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
    flex: '0 0 74px',
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
  title: 'Icon',
  component: IconsBox,
}

export const Icons = () => {
  return (
    <IconsBox>
      {/* Use Icon Component & svg on icons */}
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
        <Icon src={IconCollection.Navigatable} size={24} />
        <IconName >
          Navigatable
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Close} size={24} />
        <IconName >
          Close
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.CircleClose} size={24} />
        <IconName >
          CircleClose
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Map} size={24} />
        <IconName >
          Map
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.MapArrow} size={24} />
        <IconName >
          MapArrow
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Search} size={24} />
        <IconName >
          Search
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.FillList} size={24} />
        <IconName >
          FillList
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.List} size={24} />
        <IconName >
          List
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Like} size={24} />
        <IconName >
          Like
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Unlike} size={24} />
        <IconName >
          Unlike
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Upload} size={24} />
        <IconName >
          Upload
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Share} size={24} />
        <IconName >
          Share
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Save} size={24} />
        <IconName >
          Save
        </IconName>
      </IconBox>
      <IconBox>
        <Icon src={IconCollection.Talk} size={24} />
        <IconName >
          Talk
        </IconName>
      </IconBox>
    </IconsBox>
  )
}
