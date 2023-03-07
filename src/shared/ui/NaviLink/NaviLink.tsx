import cls from './NaviLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export enum NaviLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface NaviLinkProps extends NavLinkProps {
  className?: string
  theme?: NaviLinkTheme
}

export const NaviLink: FC<NaviLinkProps> = memo((props) => {
  const {
    to,
    className,
    theme = '',
    children,
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      className={classNames(cls.NaviLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
