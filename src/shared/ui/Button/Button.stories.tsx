import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/themeProvider";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'ui/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Button>Button</Button>,
};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Button>Button</Button>,
};

export const ClearTheme: Story = {
  render: () => <Button theme={ThemeButton.CLEAR}>Button</Button>
};

export const ClearThemeDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Button theme={ThemeButton.CLEAR}>Button</Button>
};

export const OutlineTheme: Story = {
  render: () => <Button theme={ThemeButton.OUTLINE}>Button</Button>
};

export const OutlineThemeDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Button theme={ThemeButton.OUTLINE}>Button</Button>
};
