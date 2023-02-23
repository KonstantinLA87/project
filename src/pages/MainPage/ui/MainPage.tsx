import { Counter } from 'entities/Counter';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPaige: FC = () => {
  const { t } = useTranslation('main');

  const [inputState, setInputState] = useState('');
  const onInputChange = (val: string) => {
    setInputState(val);
  }

  return (
    <div>
      <h1>{t('title')}</h1>
      <Counter />
      <Input 
        placeholder="Some text" 
        onChange={onInputChange}
        
      />
    </div>
  );
};

export default MainPaige;
