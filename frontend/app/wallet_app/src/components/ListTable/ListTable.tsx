import React, { ReactNode } from 'react';

type ListTableProps = {
    children: ReactNode,
}

export const ListTable = ({children}:ListTableProps) => {
    return(
        <table>
            {children}
        </table>
    )
}