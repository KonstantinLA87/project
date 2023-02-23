import cls from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from '../../../../shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({className}) => {
  const {t} = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <h2>{t('Sign In')}</h2>
      <Input type="text" label="Login" placeholder={t('Login')} />
      <Input type="text" label="Password" placeholder={t('Password')} />
      <Button theme={ButtonTheme.PRIMARY} size={ButtonSize.XL} >
        {t('login')}
      </Button>
    </div>
  );
};