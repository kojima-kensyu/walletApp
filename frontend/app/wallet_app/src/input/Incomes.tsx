import React, { useState } from 'react';
import { IncomesInputForm } from '../IncomesInput/IncomesInputForm';
import { useGetDbData } from '../../hooks/useGetDbData';
import { MoneyDataTypes } from '../types/MoneyData';
import { NotFoundData } from '../components/NotFoundData';
import HEAD_URL from '../Const';'../Const.js'

export const Incomes = () => {
    const [incomesCategories, setIncomesCategories] = useState<MoneyDataTypes[]>([]);
    const [categoryList] = useGetDbData<MoneyDataTypes>({url:HEAD_URL + 'incomesCategory', datas: incomesCategories, setDatas:　setIncomesCategories});
    return (
        <div>
            <h1>収入</h1>
            {[categoryList].length > 0 ? <IncomesInputForm /> : <NotFoundData props='収入カテゴリーが取得できませんでした'/>}
        </div>
    );
}
