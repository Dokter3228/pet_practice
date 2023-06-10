import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { type FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
  className?: string
}

export const LoginForm: FunctionComponent<LoginFormProps> = (props) => {
  const { className = "" } = props;
  const { t } = useTranslation();

  return (
      <div className={classNames(cls.LoginForm, {}, [className])}>
          <Input className={cls.input2} placeholder={t("Enter Login")} autoFocus type="text"/>
          <Input className={cls.input2} placeholder={t("Enter Password")} type="text"/>
          <Button className={cls.loginBtn}>
              {t("Login")}
          </Button>
      </div>
  );
};
