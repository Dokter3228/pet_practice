import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { counterReducer } from "../../../../entities/Counter";
import { userReducer } from "../../../../entities/User";
import { createReducerManager } from "app/providers/StoreProvider/config/reducerManager";
import { type DeepPartial } from "redux";

export function createReduxStore (initialState?: StateSchema, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>): any {
  // @ts-ignore
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    // @ts-ignore
    reducer: reducerManager.reduce,
    devTools: _IS_DEV_,
    preloadedState: initialState
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
