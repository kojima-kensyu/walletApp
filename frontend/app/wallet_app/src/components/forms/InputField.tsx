import React from 'react';
import { TextField } from '@mui/material';
import { Controller, RegisterOptions } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';

type InputFieldProps = {
    name: string;
    defaultValue: string | number;
    rules?: RegisterOptions;
    label: string;
}

export const InputField = ({name, defaultValue, rules, label}: InputFieldProps) => {
    const { control } = useFormContext();
    return (
        <Controller 
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field, fieldState })=>(
                <TextField
                    {...field}
                    label={label}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message as string}
                />
            )}
        />
    );
}