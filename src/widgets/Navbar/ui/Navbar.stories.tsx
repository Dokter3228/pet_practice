import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from "./Navbar";

import { ReduxDecorator } from "shared/config/storybook/ReduxDecorator/ReduxDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/themeProvider";

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [ReduxDecorator({})],
  render: () => <Navbar />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), ReduxDecorator({})],
  render: () => <Navbar />,
};

export const Auth: Story = {
  decorators: [ReduxDecorator({ user: { authData: { id: "", username: "" } } })],
  render: () => <Navbar />,
};
