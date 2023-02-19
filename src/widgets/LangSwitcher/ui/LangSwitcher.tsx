import cls from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import LangIcon from 'shared/assets/icons/lang.svg'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <>
      <button
        className={cls.lang_btn}
        onClick={toggleLang}
      >
        <LangIcon className={cls.lang_icon} />
      </button>
    </>
  )
};
