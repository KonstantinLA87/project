import cls from './Avatar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

export enum AvatarSize {
  "S" = 'small',
  "M" = 'medium',
  "L" = 'larg',
}

interface AvatarProps {
  className?: string;
  size?: AvatarSize;
  alt?: string;
  src?: string;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    size = AvatarSize.M,
    src,
    alt,
  } = props;

  return (
    <div className={classNames(cls.Avatar, {}, [className, cls[size]])}>
      <img 
        src={src}
        alt={alt}
      />
    </div>
  );
};