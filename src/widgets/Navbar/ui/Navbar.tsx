import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { type FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string
}
export const Navbar: FunctionComponent = ({ className = "" }: NavbarProps) => {
  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <div className={cls.links}>
          </div>
      </div>
  );
};
