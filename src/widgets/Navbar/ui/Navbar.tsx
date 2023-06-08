import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { type FunctionComponent } from "react";

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
