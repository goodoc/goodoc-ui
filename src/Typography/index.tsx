import React, {CSSProperties} from "react";
import theme from '../theme'

type Props = {
    style?: CSSProperties
    children?: React.ReactNode
    weight?: 'base' | 'medium' | 'bold';
    onClick?: () => void
    id?: string
}

export const Display1 = ({style, children, onClick, id}: Props) => {
    const display1 = {
        fontWeight: 700,
        fontSize: '30px',
        lineHeight: '34px',
        ...style
    }
    return (
        <h1 style={display1} id={id} onClick={onClick}>{children}</h1>
    )
}

export const Display2 = ({style, children, onClick, id}: Props) => {
    const head1 = {
        fontWeight: 700,
        fontSize: '28px',
        lineHeight: '32px',
        ...style
    }
    return (
        <h1 style={head1} id={id} onClick={onClick}>{children}</h1>
    )
}

export const Headine1 = ({style, children, onClick, id}: Props) => {
    const head1 = {
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '36px',
        ...style
    }
    return (
        <h1 style={head1} id={id} onClick={onClick}>{children}</h1>
    )
}
export const Headine2 = ({style, children, onClick, id}: Props) => {
    const head2 = {
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: '28px',
        ...style
    }
    return (
        <h2 style={head2} id={id} onClick={onClick}>{children}</h2>
    )
}
export const Headine3 = ({style, children, onClick, id}: Props) => {
    const head3 = {
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '22px',
        ...style
    }
    return (
        <h3 style={head3} id={id} onClick={onClick}>{children}</h3>
    )
}
export const Body1 = ({style, children, onClick, id, weight = 'base'}: Props) => {
    const body1 = {
        fontWeight: theme.typography.weight[weight],
        fontSize: '16px',
        lineHeight: '24px',
        ...style
    }
    return (
        <h4 style={body1} onClick={onClick} id={id}>{children}</h4>
    )
}

export const Body2 = ({style, children, onClick, id, weight = 'base'}: Props) => {
    const body2 = {
        fontWeight: theme.typography.weight[weight],
        fontSize: '14px',
        lineHeight: '20px',
        ...style
    }
    return (
        <h5 style={body2} onClick={onClick} id={id}>{children}</h5>
    )
}

export const Body3 = ({style, children, onClick, id, weight = 'base'}: Props) => {
    const body3 = {
        fontWeight: theme.typography.weight[weight],
        fontSize: '12px',
        lineHeight: '16px',
        ...style
    }
    return (
        <h6 style={body3} onClick={onClick} id={id}>{children}</h6>
    )
}

export default {
    Display1, Display2, Headine1, Headine2, Headine3, Body1, Body2, Body3
}

