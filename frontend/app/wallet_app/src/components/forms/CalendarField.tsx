import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Controller, RegisterOptions } from 'react-hook-form';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ja } from 'date-fns/locale';
registerLocale('ja', ja);

type CalendarFieldProps = {
    name: string;
    rules?: RegisterOptions;
    defaultValue: Date;
    dateFormatCalendar: string;
    dateFormat: string;
}
export const CalendarField = (props: CalendarFieldProps) => {
    const { control } = useFormContext();
    return (
        <div>
            <Controller
                control={control}
                name={props.name}
                defaultValue={props.defaultValue}
                rules={ props.rules }
                render={({field: { onChange, value }}) => (
                    <DatePicker
                        showIcon
                        dateFormatCalendar={props.dateFormatCalendar}
                        dateFormat={props.dateFormat}
                        locale="ja"
                        onChange={onChange}
                        selected={value as Date }
                    />
                )}
            />
        </div>
    )
}