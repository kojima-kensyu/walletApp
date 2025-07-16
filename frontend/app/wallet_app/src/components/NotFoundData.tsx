import React from 'react';

type Props = {
    props: string
}

export const NotFoundData = ({ props }: Props) => {
    return (
        <div>
            <p>{props}</p>
        </div>
    );
};