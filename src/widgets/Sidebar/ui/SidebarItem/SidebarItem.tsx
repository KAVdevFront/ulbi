import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../../model/types/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item:SidebarItemType
    collapsed:boolean
}

export const SidebarItem = memo(({ item, collapsed }:SidebarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }
    const route = item.path === RoutePath.profile ? `${RoutePath.profile}${isAuth?.id}` : item.path;
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={route}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>

        </AppLink>
    );
});
