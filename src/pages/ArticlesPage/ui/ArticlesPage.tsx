import cls from './ArticlesPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({className}) => {
  const {t} = useTranslation();
  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <h1>Articles Page</h1>
    </div>
  );
};

export default memo(ArticlesPage);