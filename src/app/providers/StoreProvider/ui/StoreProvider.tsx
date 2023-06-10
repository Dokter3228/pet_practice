import { type FunctionComponent, type ReactNode } from "react";
import { Provider } from 'react-redux';
import { createReduxStore } from "app/providers/StoreProvider/config/store";
import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type DeepPartial } from "redux";
interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FunctionComponent<StoreProviderProps> = (props) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>
      {children}
  </Provider>;
};
