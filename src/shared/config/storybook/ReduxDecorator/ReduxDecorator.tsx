import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { type StoryFn } from "@storybook/react";
import { type ReactElement } from "react";
import { type DeepPartial } from "redux";

export const ReduxDecorator = (initialState: DeepPartial<StateSchema>) => (StoryComponent: StoryFn): ReactElement => (
    <StoreProvider initialState={
        initialState
    }>
        <StoryComponent />
    </StoreProvider>
);
