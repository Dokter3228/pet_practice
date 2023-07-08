import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { type FunctionComponent, Suspense } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Loader } from "shared/ui/Loader/Loader";

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FunctionComponent<LoginModalProps> = (props) => {
  const { className = "", isOpen, onClose } = props;

  return (
      <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, {}, [className])}>
          <Suspense fallback={<Loader />}>
              <LoginFormAsync onSuccess={onClose} />
          </Suspense>
      </Modal>
  );
};
