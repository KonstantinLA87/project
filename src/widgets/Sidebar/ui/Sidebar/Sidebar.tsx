import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { NavLink } from 'shared/ui/NavLink/NavLink';
import { useTranslation } from 'react-i18next';

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
        <NavLink to={'/'}>{t('navlinks.main')}</NavLink>
        <NavLink to={'/about'}>{t('navlinks.about')}</NavLink>
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
