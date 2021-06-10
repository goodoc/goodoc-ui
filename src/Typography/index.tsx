import React, {CSSProperties} from "react";

type Props = {
    style?: CSSProperties
    children?: React.ReactNode
    weight?: number
}

export const Display1=(props:Props)=>{
    const display1={
        fontWeight: 700,
        fontSize: '30px',
        lineHeight: '34px',
        ...props.style
    }
    return(
        <h1 style={display1} {...props}>{props.children}</h1>
    )
}

export const Display2=(props:Props)=>{
    const head1={
        fontWeight: 700,
        fontSize: '28px',
        lineHeight: '32px',
        ...props.style
    }
    return(
        <h1 style={head1} {...props} >{props.children}</h1>
    )
}

export const Headine1=(props:Props)=>{
    const head1={
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '36px',
            ...props.style
    }
    return(
        <h1 style={head1} {...props}>{props.children}</h1>
    )
}
export const Headine2=(props:Props)=>{
    const head2={
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: '28px',
        ...props.style
    }
    return(
        <h2 style={head2} {...props}>{props.children}</h2>
    )
}
export const Headine3=(props:Props)=>{
    const head3={
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '22px',
        ...props.style
    }
    return(
        <h3 style={head3} {...props}>{props.children}</h3>
    )
}
export const Body1=(props:Props)=>{
    const body1={
        fontWeight: `${props.weight}`,
        fontSize: '16px',
        lineHeight: '24px',
        ...props.style
    }
    return(
        <h4 style={body1} {...props}>{props.children}</h4>
    )
}

export const Body2=(props:Props)=>{
    const body2={
        fontWeight: `${props.weight}`,
        fontSize: '14px',
        lineHeight: '20px',
        ...props.style
    }
    return(
        <h5 style={body2} {...props}>{props.children}</h5>
    )
}

export const Body3=(props:Props)=>{
    const body3={
        fontWeight: `${props.weight}`,
        fontSize: '12px',
        lineHeight: '16px',
        ...props.style
    }
    return(
        <h6 style={body3} {...props}>{props.children}</h6>
    )
}

