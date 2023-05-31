import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react'

export enum ThemeButton {
  CLEAR = 'clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}
export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { className, children, theme, ...otherProps } = props
  return (
      <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
          {children}
      </button>
  )
}
