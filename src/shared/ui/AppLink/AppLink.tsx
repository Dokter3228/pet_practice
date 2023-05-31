import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { type PropsWithChildren } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}
interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}
export const AppLink = (props: PropsWithChildren<AppLinkProps>) => {
  const { to, className = "", children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props
  return (
      <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
          {children}
      </Link>
  )
}
