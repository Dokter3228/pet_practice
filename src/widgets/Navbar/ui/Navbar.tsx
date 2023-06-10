import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { type FunctionComponent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
  className?: string
}
export const Navbar: FunctionComponent = ({ className = "" }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
              {t("login")}
          </Button>
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
  );
};
