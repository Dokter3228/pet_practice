import { type ComponentClass, type ComponentType, type FunctionComponent, lazy, type LazyExoticComponent } from 'react';

export const ProfilePageLazy: LazyExoticComponent<ComponentType<any>> = lazy<ComponentClass<any> | FunctionComponent<any>>(async () => await new Promise((resolve) => {
  setTimeout(() => { resolve(import('./ProfilePage')); }, 500);
}));
