import { type Theme } from "app/providers/themeProvider";
import { type StoryFn } from "@storybook/react";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
