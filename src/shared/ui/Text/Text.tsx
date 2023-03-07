import cls from './Text.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export enum TextStyle {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  style?: TextStyle;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const {
    className, 
    title, 
    text, 
    style = TextStyle.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  const {t} = useTranslation();
  return (
    <div 
      className={classNames(cls.Text, {}, [className, cls[style], cls[align]])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});