import cls from './NavBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavBarProps {
  className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Excepteur in sint deserunt adipisicing occaecat anim non esse laboris aliquip. Amet nisi nisi elit proident sunt ut exercitation est cillum nulla incididunt velit elit et. Ut ut officia est voluptate. Cillum labore amet non labore eu nulla. Incididunt anim magna ex deserunt tempor non. Sit ex laboris occaecat quis ipsum duis nulla.
      </Modal>
      <div className={cls.navbar__right}>
        <LangSwitcher />
        <ThemeSwitcher />
        <Button theme={ButtonTheme.CLEAR} onClick={onToggleModal}>{t('Sign In')}</Button>
      </div>
    </div>
  );
};
