import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleType } from '../../model/consts/consts';

interface ArticleTypeTabsProps {
    className?:string
    value:ArticleType
    onChangeType:(type: ArticleType)=>void
}

export const ArticleTypeTabs = memo(({ className, value, onChangeType }:ArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.IT,
                content: t('Айти'),
            },
            {
                value: ArticleType.ALL,
                content: t('Все'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
        ],

        [],
    );

    const onTabClick = useCallback((tab:TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, []);
    return (
        <Tabs
            value={value}
            tabs={typeTabs}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
