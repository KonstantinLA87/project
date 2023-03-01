import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const NotFoundPage: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('not_found')}</h1>
    </div>
  );
});

export default NotFoundPage;
