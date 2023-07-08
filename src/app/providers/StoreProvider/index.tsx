import { StoreProvider } from "app/providers/StoreProvider/ui/StoreProvider";
import { createReduxStore, type AppDispatch } from "app/providers/StoreProvider/config/store";
import { type StateSchema, type ReduxStoreWithManager } from "app/providers/StoreProvider/config/StateSchema";

export {
  StoreProvider,
  createReduxStore,
  type StateSchema,
  type ReduxStoreWithManager,
  type AppDispatch
};
