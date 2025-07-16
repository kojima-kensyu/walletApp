import React, { ReactNode } from 'react';
import { Select, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { Controller, RegisterOptions } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';

type SelectBoxFieldProps = {
    name: string;
    defaultValue: string;
    rules: RegisterOptions;
    label: string;
    id: string;
    labelId: string;
    children: ReactNode;
}

export const SelectBoxField = ({
    name,
    defaultValue,
    rules,
    label,
    id,
    labelId,
    children,
    }: SelectBoxFieldProps) => {

    const { control } = useFormContext();
    return (
        <div>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                rules={rules}
                render={({ field, fieldState }) => (
                    <FormControl fullWidth error={fieldState.invalid}>
                        <InputLabel id={id}>{label}</InputLabel>
                        <Select
                            labelId={labelId}
                            id={id}
                            label={label}
                            {...field}
                        >
                            {children}
                        </Select>
                        <FormHelperText>{fieldState.error?.message}</FormHelperText>
                    </FormControl>
                )}
            />
        </div>
    )
}