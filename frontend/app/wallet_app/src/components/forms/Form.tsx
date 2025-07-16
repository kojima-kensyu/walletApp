import React, { ReactNode } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { MoneyDataType } from '../../types/MoneyData';
import { IncomeDataType } from '../../types/IncomeData';

type FormProps<T> = {
    onSubmit: SubmitHandler<T>;
    children: ReactNode;
    buttonTitle: string;
}
export const Form = <T,>({ onSubmit, children, buttonTitle }: FormProps<T>) => {
    const methods = useForm<T>();
    return (
        <div>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {children}
                    <input type="submit" value={buttonTitle} />
                </form>
            </FormProvider>
        </div>
    )
}