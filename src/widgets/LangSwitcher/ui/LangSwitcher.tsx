import cls from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import LangIcon from 'shared/assets/icons/lang.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <>
      <Button
        className={cls.lang_btn}
        theme={ButtonTheme.NAVBAR}
        onClick={toggleLang}
      >
        <LangIcon className={cls.lang_icon} />
      </Button>
    </>
  )
});
