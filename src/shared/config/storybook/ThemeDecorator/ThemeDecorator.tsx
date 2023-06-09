import { type Theme, ThemeProvider } from "app/providers/themeProvider";
import { type StoryFn } from "@storybook/react";
import { type ReactElement } from "react";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn): ReactElement => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
