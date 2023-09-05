import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T
    content:string
}

interface SelectProps<T extends string> {
    className?:string
    label?:string
    options?: SelectOption<T>[]
    value?:T
    onChange?:(value:T)=>void
    readonly?:boolean
}

export const Select = <T extends string> ({
    className, label, options, onChange, value, readonly,
}:SelectProps<T>) => {
    const mods:Mods = {};

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (<span className={cls.label}>{`${label}>`}</span>)}
            <select
                value={value}
                onChange={onChangeHandler}
                className={cls.select}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};
