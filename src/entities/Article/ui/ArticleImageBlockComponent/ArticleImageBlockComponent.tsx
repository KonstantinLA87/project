import cls from './ArticleImageBlockComponent.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({className}) => {
  const {t} = useTranslation();
  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
    </div>
  );
};