import cls from './Skeleton.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string | number;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className,
    width,
    height,
    borderRadius,
  } = props;
  const {t} = useTranslation();

  const styles: CSSProperties = {
    height,
    width,
    borderRadius,
  }

  return (
    <div 
      className={classNames(cls.Skeleton, {}, [className])}
      style={styles}
      >
    </div>
  );
});