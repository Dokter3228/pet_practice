import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { type FunctionComponent, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import PropTypes from "prop-types";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginForm: FunctionComponent<LoginFormProps> = memo((props) => {
  const { className = "" } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

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
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
          <div className={classNames(cls.LoginForm, {}, [className])}>
              <Text title={t("Authorization form")} />
              {error && <Text text={t("You passed wrong credentials")} theme={TextTheme.ERROR} />}
              <Input value={username} onChange={onChangeUserName} className={cls.input2} placeholder={t("Enter Login")} autoFocus type="text"/>
              <Input value={password} onChange={onChangePassword} className={cls.input2} placeholder={t("Enter Password")} type="text"/>
              <Button disabled={isLoading} onClick={onLoginClick} theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
                  {t("login")}
              </Button>
          </div>
      </DynamicModuleLoader>
  );
});

LoginForm.propTypes = {
  className: PropTypes.string
};

export default LoginForm;
