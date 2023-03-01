import cls from './Text.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

export enum TextStyle {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  style?: TextStyle;
}

export const Text: FC<TextProps> = memo(({className, title, text, style = TextStyle.PRIMARY}) => {
  const {t} = useTranslation();
  return (
    <div 
      className={classNames(cls.Text, {}, [className, cls[style]])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});