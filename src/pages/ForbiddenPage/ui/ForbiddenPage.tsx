import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'shared/ui/Page/Page';
import { useTranslation } from 'react-i18next';
import cls from './ForbiddenPage.module.scss';

interface ForbidenPageProps {
    className?:string
}

export const ForbiddenPage = ({ className }:ForbidenPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.ForbidenPage, {}, [className])}>
            {t('У вас нет доступа к этой странице')}
        </Page>
    );
};
