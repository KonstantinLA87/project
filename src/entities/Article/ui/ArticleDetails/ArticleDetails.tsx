import cls from './ArticleDetails.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ReducersList } from '../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails';
import { useSelector } from 'react-redux';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: ArticleDetailsReducer,
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  // const isLoading = useSelector(getArticleDetailsIsLoading);
  const isLoading = true;
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if(isLoading) {
    content = (
      <div>
        <Skeleton width={130} height={130} borderRadius={'50%'} />
        <Skeleton width={600} height={20} borderRadius={4} />
        <Skeleton width={360} height={20} borderRadius={4} />
        <Skeleton width={600} height={150} borderRadius={4} />
      </div>
    )
  } else if(error) {
    content = (
      <Text title={t('Loading page error')} align={TextAlign.CENTER} />
    )
  } else {
    content = (
      <div>ARticle DeTails</div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        { content }
      </div>
    </DynamicModuleLoader>
  );
});