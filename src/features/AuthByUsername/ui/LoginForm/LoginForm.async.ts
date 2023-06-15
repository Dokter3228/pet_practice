import { type ComponentClass, type ComponentType, type FunctionComponent, lazy, type LazyExoticComponent } from "react";
import { type LoginFormProps } from "features/AuthByUsername/ui/LoginForm/LoginForm";

export const LoginFormAsync: LazyExoticComponent<ComponentType<any>> = lazy<ComponentClass<LoginFormProps> | FunctionComponent<any>>(async () => await new Promise(resolve => {
  setTimeout(() => { resolve(import('./LoginForm')); }, 500);
}));
