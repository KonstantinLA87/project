import { Counter } from 'entities/Counter';
import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextStyle } from 'shared/ui/Text/Text';

const MainPaige: FC = memo(() => {
  const { t } = useTranslation('main');

  const [inputState, setInputState] = useState('');
  const onInputChange = (val: string) => {
    setInputState(val);
  }

  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
});

export default MainPaige;
