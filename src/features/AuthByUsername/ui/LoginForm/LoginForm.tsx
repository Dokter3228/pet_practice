import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { type FunctionComponent, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../model/slice/loginSlice";
import PropTypes from "prop-types";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface LoginFormProps {
  className?: string
}

export const LoginForm: FunctionComponent<LoginFormProps> = memo((props) => {
  const { className = "" } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUserName = useCallback((value: string): void => {
    dispatch(loginActions.setUserName(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string): void => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback((): void => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
      <div className={classNames(cls.LoginForm, {}, [className])}>
          <Text title={t("Authorization form")} />
          {error && <Text text={t("You passed wrong credentials")} theme={TextTheme.ERROR} />}
          <Input value={username} onChange={onChangeUserName} className={cls.input2} placeholder={t("Enter Login")} autoFocus type="text"/>
          <Input value={password} onChange={onChangePassword} className={cls.input2} placeholder={t("Enter Password")} type="text"/>
          <Button disabled={isLoading} onClick={onLoginClick} theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
              {t("login")}
          </Button>
      </div>
  );
});

LoginForm.propTypes = {
  className: PropTypes.string
};
