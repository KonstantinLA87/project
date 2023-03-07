import cls from './Select.module.scss'
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, FC, memo, SelectHTMLAttributes, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange' >

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps extends HTMLSelectProps {
  className?: string;
  label?: string;
  readOnly?: boolean;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
  const {
    className, 
    label,
    readOnly = false,
    options = [],
    value,
    onChange,
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  }

  const optionsList = useMemo(() => {
    return options?.map(item => (
      <option value={item.value} key={item.value}>
        {item.content}
      </option>
    ))
  }, [options]);

  const {t} = useTranslation();
  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      { label && (<label>{label}</label>) }
      <select 
        disabled={readOnly}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
        >
        { optionsList }
      </select>
    </div>
  );
});