import cls from './PageError.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface PageErrorProps {
  className?: string
}

export const PageError: FC<PageErrorProps> = memo(({ className }) => {
  const { t } = useTranslation();

  const reloadPage = (): void => {
    location.reload();
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('pageError')}</p>
      <Button onClick={reloadPage}>{t('Reload page')}</Button>
    </div>
  );
});
