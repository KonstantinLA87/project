import cls from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextStyle } from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
      username, password, isLoading, error
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
      dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
      dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
      dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <h2>{t('Sign In')}</h2>
      <Input 
        type="text" 
        label="Login" 
        placeholder={t('Login')} 
        onChange={onChangeUsername}
        value={username}
        />
      <Input type="text" 
        label="Password" 
        placeholder={t('Password')} 
        onChange={onChangePassword}
        value={password}
        />
      {error && <Text text={t('login error')} style={TextStyle.ERROR} />}
      <Button 
        theme={ButtonTheme.PRIMARY} 
        size={ButtonSize.XL} 
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('login')}
      </Button>
    </div>
  );
});