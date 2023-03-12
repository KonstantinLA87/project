import cls from './ArticleDetailsPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({className}) => {
  const {t} = useTranslation();
  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <h1>Article Details Page</h1>
    </div>
  );
};

export default memo(ArticleDetailsPage);