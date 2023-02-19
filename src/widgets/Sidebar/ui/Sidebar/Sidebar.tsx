import cls from './Sidebar.module.scss'
import clsNaviLink from '../../../../shared/ui/NaviLink/NaviLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { NaviLink } from 'shared/ui/NaviLink/NaviLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/nav-home.svg'
import InfoIcon from 'shared/assets/icons/nav-info.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = (): void => {
    setCollapsed(collapsed => !collapsed)
  }

  return (
    <div 
      data-testid="sidebar" 
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <nav className={cls.links}>
        <NaviLink 
          to={RoutePath.main}
          className={classNames(collapsed ? clsNaviLink.collapsed : null)}
        >
          <HomeIcon />
          {collapsed ? null : <span>{t('NaviLinks.main')}</span> }
          
        </NaviLink>
        <NaviLink 
          to={RoutePath.about}
          className={classNames(collapsed ? clsNaviLink.collapsed : null)}
        >
          <InfoIcon />
          {collapsed ? null : <span>{t('NaviLinks.about')}</span> }
        </NaviLink>
      </nav>
      <Button 
        data-testid="button" 
        onClick={onToggle}
        className={cls.collapseBtn}

      >
        {collapsed ? '>' : '<'}
      </Button>
    </div>
  );
};
