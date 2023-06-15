import { type CounterSchema } from "entities/Counter";
import { type UserSchema } from "entities/User";
import { type LoginSchema } from "features/AuthByUsername";
import { type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from "@reduxjs/toolkit";

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Async reducers
  loginForm: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}
