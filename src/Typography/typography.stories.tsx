import React from 'react';
import {Display1, Display2, Headine1, Headine2, Headine3, Body1, Body2, Body3} from '.';

export default {
    title: 'Typography',
    component: Display1, Display2, Headine1, Headine2, Headine3, Body1, Body2, Body3,
}


export const TypographyList = () => {
    return (
        <>
            <Display1 onClick={()=>alert('display1')}>display1</Display1>
            <Display2>display2</Display2>
            <Headine1>Headine1 - 페이지 타이틀에 사용합니다.</Headine1>
            <Headine2>Headine2 - 서브 타이틀, 바텀시트 타이틀에 사용합니다.</Headine2>
            <Headine3>Headine3</Headine3>

            <Body1 weight="bold">body1 - bold</Body1>
            <Body1 weight="medium">body1 - medium</Body1>
            <Body1>body1 - base</Body1>

            <Body2 weight="bold">body2 - bold</Body2>
            <Body2 weight="medium">body2 - medium</Body2>
            <Body2>body2 - 400</Body2>

            <Body3 weight="bold">body3 - bold</Body3>
            <Body3 weight="medium">body3 - medium</Body3>
            <Body3>body3 - 400</Body3>
        </>
    )
}

