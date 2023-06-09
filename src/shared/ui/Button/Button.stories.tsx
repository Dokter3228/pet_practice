import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
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
  render: () => <Button theme={ButtonTheme.CLEAR}>Button</Button>
};

export const ClearThemeDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Button theme={ButtonTheme.CLEAR}>Button</Button>
};

export const ClearInvertedTheme: Story = {
  render: () => <Button theme={ButtonTheme.CLEAR_INVERTED}>Button</Button>
};

export const ClearInvertedThemeDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Button theme={ButtonTheme.CLEAR_INVERTED}>Button</Button>
};

export const OutlineTheme: Story = {
  render: () => <Button theme={ButtonTheme.OUTLINE}>Button</Button>
};

export const OutlineThemeSizeL: Story = {
  render: () => <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.L}>Button</Button>
};

export const OutlineThemeSizeXL: Story = {
  render: () => <Button theme={ButtonTheme.OUTLINE} size={ButtonSize.XL}>Button</Button>
};

export const OutlineThemeDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Button theme={ButtonTheme.OUTLINE}>Button</Button>
};

export const BackgroundTheme: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Button theme={ButtonTheme.BACKGROUND}>Button</Button>
};

export const BackgroundInvertedTheme: Story = {
  render: () => <Button theme={ButtonTheme.BACKGROUND_INVERTED}>Button</Button>
};

export const SquaredSizeM: Story = {
  render: () => <Button theme={ButtonTheme.BACKGROUND_INVERTED} square size={ButtonSize.M}>{">"}</Button>
};

export const SquaredSizeL: Story = {
  render: () => <Button square size={ButtonSize.L}>{">"}</Button>
};

export const SquaredSizeXL: Story = {
  render: () => <Button square size={ButtonSize.XL}>{">"}</Button>
};
