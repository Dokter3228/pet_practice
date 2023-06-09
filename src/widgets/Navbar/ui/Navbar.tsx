import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { type FunctionComponent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface NavbarProps {
  className?: string
}
export const Navbar: FunctionComponent = ({ className = "" }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={() => { setIsAuthModal(true); }}>
              {t("login")}
          </Button>
          <Modal isOpen={isAuthModal} onClose={onToggleModal}>
              <div></div>
          </Modal>
      </div>
  );
};
