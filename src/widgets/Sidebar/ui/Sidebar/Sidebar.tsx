import { classNames } from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import { type FunctionComponent, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { useTranslation } from "react-i18next";
interface SidebarProps {
  className?: string
}
export const Sidebar: FunctionComponent = ({ className = "" }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = (): void => { setCollapsed(prev => !prev); };

  return (
      <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <button data-testid="sidebar-toggle" onClick={onToggle} >{t("Toggle")}</button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} />
          </div>
      </div>
  );
};
