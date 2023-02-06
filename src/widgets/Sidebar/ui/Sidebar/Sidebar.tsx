import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(collapsed => !collapsed)
  }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>toggle</button>
    </div>
  );
};