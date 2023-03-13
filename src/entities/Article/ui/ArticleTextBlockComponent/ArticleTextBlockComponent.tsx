import cls from './ArticleTextBlockComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({className}) => {
  // const {t} = useTranslation();
  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      SOME
    </div>
  );
};