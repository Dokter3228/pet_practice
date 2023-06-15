import { type FunctionComponent, type ReactNode } from "react";
import { Provider } from 'react-redux';
import { createReduxStore } from "app/providers/StoreProvider/config/store";
import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type DeepPartial } from "redux";
import { type ReducersMapObject } from "@reduxjs/toolkit";
interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FunctionComponent<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props;

  const store = createReduxStore(initialState as StateSchema, asyncReducers);

  return <Provider store={store}>
      {children}
  </Provider>;
};
