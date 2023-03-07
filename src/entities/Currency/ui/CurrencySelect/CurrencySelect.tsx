import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
}

const options = [
  {value: Currency.RUB, content: Currency.RUB},
  {value: Currency.USD, content: Currency.USD},
  {value: Currency.EUR, content: Currency.EUR},
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {className, value, onChange, readOnly} = props;

  const {t} = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select 
      className={classNames('', {}, [className])}     
      label="Currency"
      options={options}
      value={value}
      onChange={onChangeHandler}
      readOnly={readOnly}
    />
  );
});