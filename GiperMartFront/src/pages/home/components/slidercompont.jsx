import React from 'react'

export const SampleNextArrow = (props)=> {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", margin: '0px 4rem', backgroundColor: 'black', zIndex: 120, borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}

export const SamplePrevArrow = (props)=> {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", margin: '0px 4rem', backgroundColor: 'black', zIndex: 120, borderRadius: '50%' }}
            onClick={onClick}
        />
    );
}