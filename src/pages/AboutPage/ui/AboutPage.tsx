import { Counter } from 'entities/Counter';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = memo(() => {
  const { t } = useTranslation('about');

  return (
    <div>
      <h1>{t('title')}</h1>
      <Counter />
    </div>
  );
});

export default AboutPage;
