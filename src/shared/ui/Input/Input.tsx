import { classNames } from 'shared/lib/classNames/classNames';
import { FC, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  readOnly?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    className, 
    type = 'text', 
    value, 
    onChange, 
    placeholder,
    label = null,
    readOnly = false,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }

  return (
    <div className={classNames(cls.wrapper, {}, [])}>
      {label && <label>{label}</label>}
      <input 
        className={classNames(cls.Input, {[cls.readonly]: readOnly}, [className])} 
        value={value} 
        onChange={onChangeHandler} 
        placeholder={placeholder}
        disabled={readOnly}
        {...otherProps}
      />
    </div>
  );
});