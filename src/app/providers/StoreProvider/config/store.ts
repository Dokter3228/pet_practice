import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

export function createReduxStore (initialState?: StateSchema): any {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  };
  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: _IS_DEV_,
    preloadedState: initialState
  });
}
