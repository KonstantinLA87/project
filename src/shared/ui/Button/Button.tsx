import cls from './Button.module.scss'
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { ButtonHTMLAttributes, FC, memo } from 'react';

export enum ButtonTheme {
  PRIMARY = 'primary',
  CLEAR = 'clear',
  CLEARDARK = 'clear_dark',
  OUTLINED = 'outlined',
}

export enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo((props) => {

  const { 
    children, 
    className, 
    theme = ButtonTheme.PRIMARY, 
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
  }

  return (
    <button
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
