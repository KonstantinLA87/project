import './Loader.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = memo(({ className }) => {
  return (
    <div className={classNames('lds-roller', {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});
