import cls from './NavBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { NavLink } from 'shared/ui/NavLink/NavLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
  className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <nav className={cls.links}>
        <NavLink to={'/'}>{t('navlinks.main')}</NavLink>
        <NavLink to={'/about'}>{t('navlinks.about')}</NavLink>
      </nav>
      <div className={cls.navbar__right}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
