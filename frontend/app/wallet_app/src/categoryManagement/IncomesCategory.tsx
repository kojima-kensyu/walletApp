import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../../static/styles.css";
import { MoneyDataTypes, MoneyDataType } from '../types/MoneyData';
import { useGetDbData } from '../../hooks/useGetDbData';
import { usePostDbData } from '../../hooks/usePostDbData';
import { useDeleteDbData } from '../../hooks/useDeleteDbData';
import { useGenerateFormattedDate } from '../../hooks/useGenerateFormattedDate';
import { ListHeader } from '../components/ListTable/ListHeader';
import { ListBody } from '../components/ListTable/ListBody';
import { ListTable } from '../components/ListTable/ListTable';
import { ListRow } from "../components/ListTable/ListRow";
import { Form } from '../components/forms/Form';
import { InputField } from '../components/forms/InputField';
import { validateCategoryName } from '../components/validationRules';
import { SubmitHandler } from "react-hook-form";

export const IncomesCategory = () => {

    const [incomesCategories, setIncomesCategories] = useState<MoneyDataTypes[]>([]);
    //get処理
    const [dataList] = useGetDbData<MoneyDataTypes>({url:'http://localhost:3001/incomesCategory', datas: incomesCategories, setDatas:　setIncomesCategories});
    //post処
    const { addData } = usePostDbData<MoneyDataType>("http://localhost:3001/incomesCategory/add");
    //delete処理
    const deleteData = useDeleteDbData("http://localhost:3001/incomesCategory/delete");
    const deleteRow = (id: string | number) => {
        deleteData(id as string);
        const newCategories = incomesCategories.filter((incomesCategory) => incomesCategory.id !== id);
        setIncomesCategories(newCategories);
        console.log(incomesCategories);
    };
    //Dateに関するhooks
    const updateDate = useGenerateFormattedDate().formattedDate;
    const onSubmit:SubmitHandler<MoneyDataType> = (data) => {
        console.log(data);
        addData({...data, update_date: updateDate});
    }
    return (
        <div className="IncomesCategory">
            <div>
                <Form onSubmit={onSubmit} buttonTitle='送信'>
                    <InputField
                    name='category_name'
                    defaultValue=''
                    rules={validateCategoryName.name}
                    label='新規登録'
                    />
                </Form>
            </div>
            <ListTable>
                <ListHeader titles={['収入カテゴリー名','削除']} />
                <ListBody>
                    {dataList.map((dataItem) => 
                        <ListRow
                        key={dataItem.id}
                        value={dataItem.category_name}
                        deleteButtonTitle={'delete'}
                        deleteData={() => deleteRow(dataItem.id)}
                        />
                    )}
                </ListBody>
            </ListTable>
            <Link to="/category">back to page</Link>
        </div>
    );
}