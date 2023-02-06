import cls from './NavBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
  className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.links}>
          <AppLink to={'/'}>{t('navlinks.main')}</AppLink>
          <AppLink to={'/about'}>{t('navlinks.about')}</AppLink>
        </div>
      <div className={cls.navbar__right}>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
