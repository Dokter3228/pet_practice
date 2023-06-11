import type { Meta, StoryObj } from '@storybook/react';

import MainPage from "./MainPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/themeProvider";
import { ReduxDecorator } from "shared/config/storybook/ReduxDecorator/ReduxDecorator";

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [ReduxDecorator({ counter: { value: 5 } })],
  render: () => <MainPage />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), ReduxDecorator({ counter: { value: 5 } })],
  render: () => <MainPage />,
};
