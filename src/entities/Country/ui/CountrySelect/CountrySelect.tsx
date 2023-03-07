import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
}

const options = [
  {value: Country.RU, content: Country.RU},
  {value: Country.BE, content: Country.BE},
  {value: Country.UA, content: Country.UA},
  {value: Country.GU, content: Country.GU},
]

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {className, value, onChange, readOnly} = props;

  const {t} = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select 
      className={classNames('', {}, [className])}     
      label="Country"
      options={options}
      value={value}
      onChange={onChangeHandler}
      readOnly={readOnly}
    />
  );
});