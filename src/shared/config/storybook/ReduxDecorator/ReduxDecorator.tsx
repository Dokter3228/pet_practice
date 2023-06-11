import { StoreProvider } from "app/providers/StoreProvider";
import { type StoryFn } from "@storybook/react";
import { type ReactElement } from "react";

export const ReduxDecorator = (StoryComponent: StoryFn): ReactElement => (
    <StoreProvider initialState={
      { counter: { value: 10 } }
    }>
        <StoryComponent />
    </StoreProvider>
);
