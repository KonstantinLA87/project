import cls from './NavLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export enum NavLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface NavLinkProps extends NavLinkProps {
  className?: string
  theme?: NavLinkTheme
}

export const NavLink: FC<NavLinkProps> = (props) => {
  const {
    to,
    className,
    theme = NavLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      className={classNames(cls.NavLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
        {children}
    </NavLink>
  );
};
