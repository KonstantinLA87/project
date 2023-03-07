import cls from './NavBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavBarProps {
  className?: string
}

export const NavBar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if(authData) {
    return (
      <div className={classNames(cls.NavBar, {}, [className])}>
        <div className={cls.navbar__right}>
          <LangSwitcher />
          <ThemeSwitcher />
          <Button 
            className={classNames(cls.signin)}
            theme={ButtonTheme.NAVBAR} 
            onClick={onLogout}
          >
            {t('Logout')}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      { isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} /> }
      <div className={cls.navbar__right}>
        <LangSwitcher />
        <ThemeSwitcher />
        <Button 
          className={classNames(cls.signin)}
          theme={ButtonTheme.NAVBAR} 
          onClick={onOpenModal}
        >
          {t('Sign In')}
        </Button>
      </div>
    </div>
  );
});
