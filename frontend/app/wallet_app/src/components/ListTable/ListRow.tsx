import React from 'react';
import { Button } from '../Button';
//各行のコンポーネントを作成する
type ListRowProps = {
    value: string | string[],
    deleteButtonTitle: string,
    deleteData: () => void,
}
//引数valueがリストであればインデックスを付与しているが配列であることがわかるのか
export const ListRow = ({value, deleteButtonTitle, deleteData}:ListRowProps) => {
    return(
        <tr>
            {Array.isArray(value) ? (value.map((val, index) =>
                <>
                    <td key={index}>{val}</td>
                    <td>
                        <Button title={deleteButtonTitle} handleClick={deleteData}/>
                    </td>
                </>
            )) : (
            <>
                <td>{value}</td>
                <td>
                    <Button title={deleteButtonTitle} handleClick={deleteData}/>
                </td>
            </>
            )
            }
        </tr>
    )
}