import cls from './PageLoader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Loader } from '../../shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
