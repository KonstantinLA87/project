import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, InputHTMLAttributes } from 'react';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export const Input: FC<InputProps> = (props) => {
  const {
    className, 
    type = 'text', 
    value, 
    onChange, 
    placeholder,
    label = null,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }

  return (
    <>
      {label && <label>{label}</label>}
      <input 
        className={classNames(cls.Input, {}, [className])} 
        value={value} 
        onChange={() => onChange(value)} 
        placeholder={placeholder}
        {...otherProps}
      />
    </>
  );
};