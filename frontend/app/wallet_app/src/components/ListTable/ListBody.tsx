import React, { ReactNode } from 'react';

type ListBodyProps = {
    children: ReactNode,
}

export const ListBody = ({children}:ListBodyProps ) => {
    return (
        <tbody>
            {children}
        </tbody>
    );
}