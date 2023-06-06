import { classNames } from "shared/lib/classNames/classNames";
import cls from './PageError.module.scss';
import { useTranslation } from "react-i18next";
import { type FC } from "react";
import { Button } from "shared/ui/Button/Button";

interface PageErrorProps {
  className?: string
}
export const PageError: FC = ({ className = "" }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = (): void => {
    location.reload();
  };

  return (
      <div className={classNames(cls.PageError, {}, [className])}>
          {t("Some error just appeared")}
          <Button onClick={reloadPage} >
              {t("Reload the page")}
          </Button>
      </div>
  );
};
