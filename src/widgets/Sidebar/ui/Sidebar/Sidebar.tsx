import { classNames } from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import { type FunctionComponent, useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
interface SidebarProps {
  className?: string
}
export const Sidebar: FunctionComponent = ({ className = "" }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

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
          <div className={cls.items}>
              <div className={cls.item}>
                  <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.MAIN} className={cls.item_link} >
                      <MainIcon className={cls.icon} />
                      <span className={cls.link}>{t("Main page")}</span>
                  </AppLink>
              </div>
              <div className={cls.item}>
                  <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.ABOUT} className={cls.item_link} >
                      <AboutIcon className={cls.icon} />
                      <span className={cls.link}>{t("About page")}</span>
                  </AppLink>
              </div>
          </div>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher short={collapsed} className={cls.lang} />
          </div>
      </div>
  );
};
