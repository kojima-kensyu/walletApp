import React, { useState } from 'react';
import { useGetDbData } from '../../hooks/useGetDbData';
import { IncomeDataType } from '../types/IncomeData'
import { ListTable } from '../components/ListTable/ListTable';
import { ListBody } from '../components/ListTable/ListBody';
import { NoneButtonListRow } from '../components/ListTable/NoneButtonListRow';
import { ListHeader } from '../components/ListTable/ListHeader';

export const IncomesChart = () => {
    const [incomes, setIncomes] = useState<IncomeDataType[]>([]);
    const datas = useGetDbData<IncomeDataType>({url:'http://localhost:3001/api/income/incomes', datas: incomes, setDatas:　setIncomes});
    const titles = [
        '該当日',
        '金額',
        '内訳',
        'メモ',
    ]
    const formattedDate = (date: string) => {
        return date.slice(0, 10)
    }
    const formattedIncomeAmount = (incomeAmount: string) => {
        const mathFloorIncomeAmount = Math.floor(Number(incomeAmount));
        return mathFloorIncomeAmount.toString();
    }
    return (
       <ListTable>
           <ListHeader
           titles={titles}
           />
           <ListBody>
               {datas.map((incomeData) =>
               <NoneButtonListRow
                    value={[formattedDate(incomeData.income_date), formattedIncomeAmount(incomeData.income_amount), incomeData.income_category_id, incomeData.remarks]}
               />
               )}
           </ListBody>
       </ListTable>
    );
}