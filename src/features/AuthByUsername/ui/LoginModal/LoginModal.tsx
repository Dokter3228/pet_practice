import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { type FunctionComponent } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FunctionComponent<LoginModalProps> = (props) => {
  const { className = "", isOpen, onClose } = props;

  return (
      <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, {}, [className])}>
          <LoginForm />
      </Modal>
  );
};
