import React from 'react';

type ButtonProps = {
    title: string,
    handleClick: () => void,
}   
export const Button = ({title, handleClick}: ButtonProps) => {
    return (
        <button onClick={handleClick}>{title}</button>
    );
}