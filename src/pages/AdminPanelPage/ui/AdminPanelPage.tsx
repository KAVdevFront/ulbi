import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?:string
}

const AdminPanelPage = ({ className }:AdminPanelPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
            {t('Админ')}
        </Page>
    );
};

export default AdminPanelPage;
