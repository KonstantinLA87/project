import { NavLink } from "react-router-dom";
import cls from './NavBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from "react";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({className}) => {
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'}>Домой</AppLink>
        <AppLink to={'/about'}>О нас</AppLink>
      </div>
    </div>
  );
};
