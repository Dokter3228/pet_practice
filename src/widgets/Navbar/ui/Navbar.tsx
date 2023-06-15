import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { type FunctionComponent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "../../../entities/User";

interface NavbarProps {
  className?: string
}
export const Navbar: FunctionComponent = ({ className = "" }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback((): void => {
    dispatch(userActions.logout());
    setIsAuthModal(false);
  }, [dispatch]);

  if (authData) {
    return <div className={classNames(cls.Navbar, {}, [className])}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onLogout}>
            {t("logout")}
        </Button>
    </div>;
  }

  return (
      <div className={classNames(cls.Navbar, {}, [className])}>
          <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
              {t("login")}
          </Button>
          {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
      </div>
  );
};
