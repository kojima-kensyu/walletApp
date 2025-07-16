import React from 'react';

type ListHeaderProps={
    titles: string[]
}

export const ListHeader = ({titles}: ListHeaderProps) => {
    return (
        <thead>
            <tr>
                {titles.map((title, index) => (
                    <th key={index}>{title}</th>
                ))}
            </tr>
        </thead>
    )
}