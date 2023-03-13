import cls from './ArticleCodeBlockComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleCodeBlockComponentProps {
  className?: string;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({className}) => {
  const {t} = useTranslation();
  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
    </div>
  );
};