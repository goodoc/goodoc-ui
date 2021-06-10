import React from 'react';
import {Display1, Display2, Headine1, Headine2, Headine3, Body1, Body2, Body3} from '.';

export default {
    title: 'Typography',
    component: Display1, Display2, Headine1, Headine2, Headine3, Body1, Body2, Body3,
}


export const TypographyList = () => {
    return (
        <>
            <Display1>display1</Display1>
            <Display2>display2</Display2>
            <Headine1>Headine1 - 페이지 타이틀에 사용합니다.</Headine1>
            <Headine2>Headine2 - 서브 타이틀, 바텀시트 타이틀에 사용합니다.</Headine2>
            <Headine3>Headine3</Headine3>

            <Body1 weight={700}>body1 - 700</Body1>
            <Body1 weight={500}>body1 - 500</Body1>
            <Body1>body1 - 400</Body1>

            <Body2 weight={700}>body2 - 700</Body2>
            <Body2 weight={500}>body2 - 500</Body2>
            <Body2>body2 - 400</Body2>

            <Body3 weight={700}>body3 - 700</Body3>
            <Body3 weight={500}>body3 - 500</Body3>
            <Body3>body3 - 400</Body3>
        </>
    )
}

