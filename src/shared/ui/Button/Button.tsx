import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { type ButtonHTMLAttributes, type FunctionComponent, type PropsWithChildren } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted"
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}
export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    className,
    children,
    disabled,
    theme = "",
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: !!square,
    [cls.disabled]: !!disabled
  };

  return (
      <button disabled={disabled} className={classNames(cls.Button, mods, [className ?? "", cls[theme], cls[size]])} {...otherProps}>
          {children}
      </button>
  );
};
