import { classNames } from "shared/lib/classNames/classNames"
import cls from './NotFoundPage.module.scss'
import { useTranslation } from "react-i18next"
import { type FC } from "react"
interface NotFoundPageProps {
  className?: string
}
export const NotFoundPage: FC = ({ className = "" }: NotFoundPageProps) => {
  const { t } = useTranslation()
  return (
      <div className={classNames(cls.NotFoundPage, {}, [className])}>
          {t("Page not found")}
      </div>
  )
}
