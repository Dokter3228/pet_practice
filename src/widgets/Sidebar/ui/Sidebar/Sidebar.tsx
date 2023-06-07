import { classNames } from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import { type FunctionComponent, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";

interface SidebarProps {
  className?: string
}
export const Sidebar: FunctionComponent = ({ className = "" }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = (): void => { setCollapsed(prev => !prev); };

  return (
      <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button
              data-testid="sidebar-toggle"
              onClick={onToggle} className={cls.collapsedBtn}
              theme={ButtonTheme.BACKGROUND_INVERTED}
              square
              size={ButtonSize.XL}
          >
              {collapsed ? ">" : "<"}
          </Button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher short={collapsed} className={cls.lang} />
          </div>
      </div>
  );
};
