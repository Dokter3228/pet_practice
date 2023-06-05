import type { Preview } from "@storybook/react";
import '../../src/app/styles/index.scss';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/themeProvider";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        date: /Date$/,
      },
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator]
};

export default preview;
