import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import {
  type FunctionComponent,
  type MouseEvent,
  type ReactNode,
  useState,
  useRef,
  useEffect,
  useCallback
} from "react";
import { Portal } from "shared/ui/Portal/Portal";

interface KeyboardEvent {
  key: string
}

interface ModalProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const ANIMATION_DELAY = 100;

export const Modal: FunctionComponent<ModalProps> = (props) => {
  const { className = "", children, isOpen = false, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const onContentClick = (e: MouseEvent): void => { e.stopPropagation(); };

  const onCloseHandler = useCallback((): void => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent): void => {
    if (e.key === "Escape") {
      onCloseHandler();
    }
  }, [onCloseHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };

  return (
      <Portal>
          <div className={classNames(cls.Modal, mods, [className])}>
              <div className={cls.overlay} onClick={onCloseHandler}>
                  <div className={cls.content} onClick={onContentClick}>{children}</div>
              </div>
          </div>
      </Portal>
  );
};
