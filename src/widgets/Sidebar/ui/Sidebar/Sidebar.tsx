import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo, useMemo, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = (): void => {
    setCollapsed(collapsed => !collapsed)
  }

  const itemsList = useMemo(() => {
    return SidebarItemsList.map( item => ( 
      <SidebarItem 
        item={item} 
        collapsed={collapsed}
        key={item.path}
      />
    ))
  }, [collapsed]);

  return (
    <div 
      data-testid="sidebar" 
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <nav className={cls.links}>
        {itemsList}
      </nav>
      <Button 
        data-testid="button" 
        onClick={onToggle}
        className={cls.collapseBtn}
      >
        {collapsed ? '>' : '<'}
      </Button>
    </div>
  );
});
