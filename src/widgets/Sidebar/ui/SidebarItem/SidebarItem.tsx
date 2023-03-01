import cls from '../../../../shared/ui/NaviLink/NaviLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NaviLink } from 'shared/ui/NaviLink/NaviLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemsList, SidebarItemType } from '../../model/items';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
  const {t} = useTranslation();
  return (
    <NaviLink 
      to={item.path}
      className={classNames(collapsed ? cls.collapsed : '')}
    >
      <item.Icon />
      {collapsed ? null : <span>{t(item.text)}</span> }
      
    </NaviLink>
  );
});