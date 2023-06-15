import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { type StoryFn } from "@storybook/react";
import { type ReactElement } from "react";
import { type DeepPartial } from "redux";
import { type ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer
};

export const ReduxDecorator = (initialState: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) => (StoryComponent: StoryFn): ReactElement => (
    <StoreProvider initialState={
        initialState
    } asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
