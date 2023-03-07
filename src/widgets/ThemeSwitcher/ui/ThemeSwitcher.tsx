import cls from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={classNames(cls.ThemeSwitcher, {}, [theme === Theme.LIGHT ? cls.light : cls.dark])}
      onClick={toggleTheme}
      >
        <div>
          <LightIcon className={classNames(cls.icon, {}, [])} />
        </div>
        <div>
          <DarkIcon className={classNames(cls.icon, {}, [])} />
        </div>
    </button>
  );
});
