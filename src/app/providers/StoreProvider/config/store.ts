import { configureStore } from '@reduxjs/toolkit';
import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { counterReducer } from "../../../../entities/Counter/index";

export function createReduxStore (initialState?: StateSchema): any {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: _IS_DEV_,
    preloadedState: initialState
  });
}
