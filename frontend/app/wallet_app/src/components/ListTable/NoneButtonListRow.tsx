import React from 'react';
import { Button } from '../Button';
//各行のコンポーネントを作成する
type ListRowProps = {
    value: string | string[],
}

export const NoneButtonListRow = ({value}:ListRowProps) => {
    return(
        <tr>
            {Array.isArray(value) ? (value.map((val, index) =>
                <>
                    <td key={index}>{val}</td>
                </>
            )) : (
            <>
                <td>{value}</td>
            </>
            )
            }
        </tr>
    )
}