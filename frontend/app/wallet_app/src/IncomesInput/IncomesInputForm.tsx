import React, { useState } from 'react';
import { format } from 'date-fns/fp';
import { useForm } from 'react-hook-form';
import { MenuItem } from '@mui/material';
import { Form } from '../components/forms/Form';
import { useGetDbData } from '../../hooks/useGetDbData';
import { usePostDbData } from '../../hooks/usePostDbData';
import { useGenerateFormattedDate } from '../../hooks/useGenerateFormattedDate';
import { MoneyDataTypes } from '../types/MoneyData';
import { IncomeDataType } from '../types/IncomeData';
import { SelectBoxField } from '../components/forms/SelectBoxField';
import { InputField } from '../components/forms/InputField';
import { CalendarField } from '../components/forms/CalendarField';
import { validateSelectBox, validateNumber, validateRemarks, validateNullOrUndifined } from '../components/validationRules';
import HEAD_URL from '../Const';'../Const.js'

type FormInputType = {
    id: string;
    income_date: string;
    income_amount: string;
    income_category_id: string;
    remarks: string;
    update_date: string;
}

export const IncomesInputForm = () => {
    const methods = useForm<FormInputType>();
    const { addData } = usePostDbData('http://localhost:3001/incomes/add');
    const onSubmit = (data: IncomeDataType) => {
        const formatIncomeDate = format('yyyy-MM-dd');
        const formattedIncomeDate= formatIncomeDate(data.income_date);
        const updateDate = useGenerateFormattedDate().formattedDate;
        addData({...data, "income_date": formattedIncomeDate, "update_date": updateDate})
        console.log({...data, "income_date": formattedIncomeDate, "update_date": updateDate});
    };
    const [incomesCategories, setIncomesCategories] = useState<MoneyDataTypes[]>([]);
    const [categoryList] = useGetDbData<MoneyDataTypes>({url:HEAD_URL + 'incomesCategory', datas: incomesCategories, setDatas:　setIncomesCategories});
    const rules = {
        incomeAmountRules: {
            validate: validateNumber,
        },
        selectBoxRules: {
            validate: validateSelectBox,
        },
    }
    //CalendarFieldのdefaultValue
    const initialDate = new Date();
    const [startDate, setStartDate] = useState(initialDate);

    return (
        <Form onSubmit={onSubmit} buttonTitle='送信'>
            <InputField
                name='income_amount'
                defaultValue=''
                rules={rules.incomeAmountRules}
                label='金額'
            />
            <CalendarField
                name='income_date'
                defaultValue={startDate}
                rules={validateNullOrUndifined.inputValue}
                dateFormatCalendar={"yyyy年 MM月"}
                dateFormat={"yyyy-MM-dd"}
            />
            <SelectBoxField
                name='income_category_id'
                defaultValue=''
                rules={rules.selectBoxRules}
                label='カテゴリー'
                id='income_category_id'
                labelId='income_category_label'
                >
                {[categoryList].map((categoryItem) => 
                   categoryItem && <MenuItem key={categoryItem.id} id={categoryItem.id} value={categoryItem.id}>{categoryItem.category_name}</MenuItem>
                )}
            </ SelectBoxField>
            <InputField
                name='remarks'
                defaultValue=''
                rules={validateRemarks}
                label='備考 (未記入可)'
            />
        </Form>
    )
}