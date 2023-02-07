import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = (): void => {
    setCollapsed(collapsed => !collapsed)
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button theme={ThemeButton.CLEARDARK} onClick={onToggle}></Button>
    </div>
  );
};
