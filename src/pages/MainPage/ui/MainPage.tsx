import { Counter } from 'entities/Counter';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextStyle } from 'shared/ui/Text/Text';

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
      <Text 
        title="Asdasd asd as " 
        text="Non mollit proident laborum qui commodo adipisicing. Nulla qui adipisicing occaecat incididunt anim dolore dolor labore dolor commodo. Do ullamco adipisicing laboris in in ipsum pariatur ut consequat duis incididunt eiusmod. Laborum pariatur occaecat adipisicing laborum eiusmod sunt. Ex ipsum eu esse ad mollit commodo consectetur. Veniam aliquip consectetur commodo nulla. Deserunt velit mollit culpa enim deserunt do pariatur." 
      />
      <Input 
        placeholder="Some text" 
        onChange={onInputChange}
        
      />
    </div>
  );
};

export default MainPaige;
