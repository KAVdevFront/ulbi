import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

import { ListBox } from 'shared/ui/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?:string
    value?: Currency;
    onChange?:(value:Currency)=>void
    readonly?:boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(({
    className, onChange, value, readonly,
}:CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (

        <ListBox
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            value={value}
            items={options}
            defaultValue={t('Укажите валюту')}
            readonly={readonly}
            direction="top right"
            label={t('Укажите валюту')}

        />
    );
});
